import { Injectable } from '@angular/core';
import { AuthenticationApi } from '../api/authentication.api';
import { ILogin } from '../api/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authApi: AuthenticationApi) { }

  public logIn(email: string, password: string): void {
    const login: ILogin = {
      email: email,
      password: password
    }

    this.authApi.logIn(login)
    .subscribe({
      next: () => {
        console.log("success");
      }, 
      error: (error) => console.log("error")
    });;
  }
}
