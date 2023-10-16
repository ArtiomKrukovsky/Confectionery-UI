import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, throwError } from 'rxjs';
  import { catchError, retry } from 'rxjs/operators';
  import { NotificationMessage } from 'src/app/services/notification/models/notification-message';
  import { NotificationService } from 'src/app/services/notification/notification.service';
  import { ERROR_TITLE } from 'src/app/shared/constants/notification.constants';
  
  @Injectable()
  export class HttpErrorInterceptor implements HttpInterceptor {
  
    constructor() { }
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
      .pipe(
        retry(1), 
        catchError((error: HttpErrorResponse) => {
          // there will be additional logic  
          return throwError(() => error.message);
        })
      )
    }
  }
  