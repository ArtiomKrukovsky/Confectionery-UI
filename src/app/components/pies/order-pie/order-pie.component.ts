import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ORDER_TITLE, SUCCESS_ORDER_MESSAGE } from 'src/app/core/constants/notification.constants';
import { NotificationMessage } from 'src/app/services/notification/models/notification-message';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { PopupService } from 'src/app/services/popup.service';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-order-pie',
  templateUrl: './order-pie.component.html',
  styleUrls: ['./order-pie.component.scss']
})
export class OrderPieComponent implements OnInit {
  @Input() productId: string;
  @Input() quantityOrder: number; 

  public form = new FormGroup({
    name: new FormControl<string>("", [
      Validators.required, 
      Validators.minLength(3)
    ]),
    email: new FormControl<string>("", [
      Validators.required, 
      Validators.email
    ]),
    instagramProfile: new FormControl<string>("", []),
    mobileNumber: new FormControl<string>("", [
      Validators.required, 
      Validators.pattern('[- +()0-9]+')
    ])
  })

  public get name() {
    return this.form.controls.name as FormControl;
  }

  public get email() {
    return this.form.controls.email as FormControl;
  }

  public get instagramProfile() {
    return this.form.controls.instagramProfile as FormControl;
  }

  public get mobileNumber() {
    return this.form.controls.mobileNumber as FormControl;
  } 

  constructor(
    public pieService: PieService,
    private popupService: PopupService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  public order() {
    let successMessage: NotificationMessage = {
      title: ORDER_TITLE,
      message: SUCCESS_ORDER_MESSAGE
    }
      
    this.notificationService.showSuccess(successMessage);
    this.popupService.close();
  }
}
