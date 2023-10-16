import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../../components/authentication/services/authentication.service';
import { LOGIN_PAGE_PATH } from '../../shared/constants/page.constants';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private authService: AuthenticationService
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserAuthorized()) {
      return true;
    }

    this.router.navigate([LOGIN_PAGE_PATH]);
    return false;
  }
}
