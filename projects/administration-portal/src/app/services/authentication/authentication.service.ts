import { Injectable } from '@angular/core';
import { AuthenticationApi } from '../../shared/apis/authentication/authentication.api';
import { ILogin } from '../../shared/apis/authentication/models/login';
import { ErrorHandleService } from '../error-handle.service';
import { Router } from '@angular/router';
import { JwtTokenService } from './jwt-token.service';
import { ORDERS_PAGE_PATH } from '../../shared/constants/page.constants';

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

        this.router.navigate([ORDERS_PAGE_PATH])
      }, 
      error: (error) => this.errorHandleService.handle(error)
    });
  }

  public isUserAuthorized(): boolean {
    return this.jwtTokenService.isUserAuthorized();
  }
}
