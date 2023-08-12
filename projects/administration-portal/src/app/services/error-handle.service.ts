import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ERROR_TITLE } from '../shared/constants/notification.constants';
import { NotificationMessage } from './notification/models/notification-message';
import { NotificationService } from './notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {
  private error$ = new Subject<string>();

  constructor(private notificationService: NotificationService) { }

  // todo: convert the service to global and inject it
  public handle(error: HttpErrorResponse) {
    const errorMessage: NotificationMessage = {
      title: ERROR_TITLE,
      message: error.message
    }

    this.notificationService.showFailed(errorMessage);
    this.error$.next(error.message);
  }
}
