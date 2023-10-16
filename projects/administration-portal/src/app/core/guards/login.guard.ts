import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { ORDERS_PAGE_PATH } from '../../shared/constants/page.constants';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router, 
    private authService: AuthenticationService
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserAuthorized()) {
      this.router.navigate([ORDERS_PAGE_PATH]);
      return false;
    }

    return true;
  }
}
