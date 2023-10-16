import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { StorageService } from '../storage.service';
import { IDecodedToken } from './models/decoded-token';
import { IUser } from './models/user';
import { ADMIN_ROLE_NAME, USER_STORAGE_KEY } from '../../shared/constants/jwt.constants';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  constructor(private storageService: StorageService) { }

  public saveUser(accessToken: string, refreshToken: string): void {
    if (accessToken) {
      const decodedToken = jwt_decode<IDecodedToken>(accessToken);

      const user: IUser = {
        accessToken: accessToken,
        refreshToken: refreshToken,
        expiresAt: decodedToken.exp,
        username: decodedToken.userName,
        role: decodedToken.role,
        userId: decodedToken.userId,
      };

      this.storageService.set(USER_STORAGE_KEY, JSON.stringify(user));
    }
  }

  public removeUser(): void {
    this.storageService.remove(USER_STORAGE_KEY);
  }

  public isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    return expiryTime ? Date.now() >= expiryTime * 1000 : false;
  }

  public isUserAuthorized(): boolean {
    const user = this.getUser();
    const userRole = user?.role;

    return userRole
      ? userRole === ADMIN_ROLE_NAME
      : false;
  }

  public getAccessToken(): string {
    var user = this.getUser();
    return user?.accessToken;
  }

  public getRefreshToken(): string {
    var user = this.getUser();
    return user?.refreshToken;
  }

  private getExpiryTime(): number {
    const user = this.getUser();
    return user?.expiresAt;
  }

  private getUser(): IUser {
    var user = this.storageService.get(USER_STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  } 
}
