import { Injectable } from '@angular/core';
import { AuthenticationApi } from '../../../shared/apis/authentication/authentication.api';
import { ILogin } from '../../../shared/apis/authentication/models/login';
import { ErrorHandleService } from '../../../services/error-handle.service';
import { Router } from '@angular/router';
import { JwtTokenService } from '../../../services/authentication/jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private authApi: AuthenticationApi,
    private errorHandleService: ErrorHandleService,
    private jwtTokenService: JwtTokenService,
    private router: Router
  ) { }

  public logIn(email: string, password: string): void {
    const login: ILogin = {
      email: email,
      password: password
    }

    this.authApi.logIn(login)
    .subscribe({
      next: (tokens) => {
        this.jwtTokenService.saveUser(
          tokens.accessToken,
          tokens.refreshToken
        );

        this.router.navigate(['/orders'])
      }, 
      error: (error) => this.errorHandleService.handle(error)
    });
  }

  public isUserAuthorized(): boolean {
    return this.jwtTokenService.isUserAuthorized();
  }
}
