import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor, 
    HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { JwtTokenService } from '../../services/authentication/jwt-token.service';
import { ITokens } from '../../shared/apis/authentication/models/tokens';
import { LOGIN_PAGE_PATH } from '../../shared/constants/page.constants';
import { Router } from '@angular/router';
import { AuthenticationApi } from '../../shared/apis/authentication/authentication.api';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
    constructor(
        private authApi: AuthenticationApi,
        private jwtTokenService: JwtTokenService, 
        private router: Router
    ) { }

    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (
                error instanceof HttpErrorResponse &&
                !req.url.includes(LOGIN_PAGE_PATH) &&
                error.status === 401
            ) {
                return this.handle401Error(req, next);
            }

            return next.handle(req);
        })
    );}
    
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.jwtTokenService.getAccessToken();
        const refreshToken = this.jwtTokenService.getRefreshToken();

        if (accessToken && refreshToken) {
            const refreshTokens: ITokens = {
                accessToken: accessToken,
                refreshToken: refreshToken,
            };

            this.authApi.refreshToken(refreshTokens)
            .subscribe({
                next: (tokens) => {
                    this.jwtTokenService.saveUser(
                        tokens.accessToken,
                        tokens.refreshToken
                    );
                },
                error: (err: HttpErrorResponse) => {
                    this.jwtTokenService.removeUser();
                    this.router.navigate([LOGIN_PAGE_PATH]);
                    return throwError(() => new Error(err.error.Message));
                },
            });
        }

        return next.handle(request);
    }      
}
