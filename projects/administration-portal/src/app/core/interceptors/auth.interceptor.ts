import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor, 
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtTokenService } from '../../services/authentication/jwt-token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private jwtTokenService: JwtTokenService) { }

    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const accessToken = this.jwtTokenService.getAccessToken();

        if (accessToken) {
            req = req.clone({
                url: req.url,
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        }
      
        return next.handle(req);
    }    
}
