import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorHandleService } from 'src/app/services/error-handle.service';
import { GET_CONFECTIONS_ERROR_MESSAGE } from 'src/app/shared/constants/notification.constants';
import { ConfectionApi } from '../api/confection.api';
import { IConfectionMapping } from '../api/models/confection-mapping';

@Injectable({
  providedIn: 'root'
})
export class ConfectionMappingsResolver implements Resolve<IConfectionMapping[]> {
  
  constructor(
    private confectionApi: ConfectionApi,
    private errorHandleService: ErrorHandleService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<IConfectionMapping[]> {
    return this.confectionApi.getAllConfectionMappings()
      .pipe(
        catchError((error) => {
          this.errorHandleService.handle(error);
          return throwError(() => error.message);
        })
      );
  }
}
