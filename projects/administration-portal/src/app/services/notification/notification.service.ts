import { Injectable } from '@angular/core';
import { NotificationMessage } from './models/notification-message';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  public showSuccess(notification: NotificationMessage): void {
    this.toastr.success(notification.message, notification.title);
  } 

  public showFailed(notification: NotificationMessage): void {
    this.toastr.error(notification.message, notification.title);
  } 
}
