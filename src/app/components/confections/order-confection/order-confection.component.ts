import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IConfection } from '../api/models/confection/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-order-confection',
  templateUrl: './order-confection.component.html',
  styleUrls: ['./order-confection.component.scss']
})
export class OrderConfectionComponent implements OnInit, OnDestroy {
  @Input() confectionId: string;
  @Input() quantityOrder: number; 

  public confection: IConfection;
  public isLoading: boolean;

  public totalLine: string = '';

  private subscriptions$: Subscription;

  public form = new FormGroup({
    fullName: new FormControl<string>("", [
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

  public get fullName() {
    return this.form.controls.fullName as FormControl;
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
    public confectionService: ConfectionService
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
    this.confectionService.orderConfection(
      this.confectionId, 
      this.confection.price, 
      this.quantityOrder, 
      this.fullName.value as string,
      this.email.value as string,
      this.instagramProfile.value as string,
      this.mobileNumber.value as string
    );
  }

  private calculateTotalLine(): void {
    this.totalLine = (this.confection.price * this.quantityOrder).toFixed(2);
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.confectionService.SelectedConfection.subscribe(selectedConfection => this.confection = selectedConfection));
    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
