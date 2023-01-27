import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ORDER_TITLE, SUCCESS_ORDER_MESSAGE } from 'src/app/shared/constants/notification.constants';
import { NotificationMessage } from 'src/app/services/notification/models/notification-message';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { PopupService } from 'src/app/services/popup.service';
import { IConfection } from '../api/models/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-order-confection',
  templateUrl: './order-confection.component.html',
  styleUrls: ['./order-confection.component.scss']
})
export class OrderConfectionComponent implements OnInit, OnDestroy {
  @Input() productId: string;
  @Input() quantityOrder: number; 

  public confection: IConfection;
  public isLoading: boolean;

  public totalLine: string = '';

  private subscriptions$: Subscription;

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
    public confectionService: ConfectionService,
    private popupService: PopupService,
    private notificationService: NotificationService
  ) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit() {
    this.calculateTotalLine();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public order(): void {
    const successMessage: NotificationMessage = {
      title: ORDER_TITLE,
      message: SUCCESS_ORDER_MESSAGE
    }
      
    this.notificationService.showSuccess(successMessage);
    this.popupService.close();
  }

  private calculateTotalLine(): void {
    this.totalLine = (this.confection.price * this.quantityOrder).toFixed(2);
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.confectionService.SelectedConfection.subscribe(selectedConfection => this.confection = selectedConfection));
    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
