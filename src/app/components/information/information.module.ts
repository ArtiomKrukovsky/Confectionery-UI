import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { InformationRoutingModule } from './information-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InformationRoutingModule
  ],
  declarations: [
    AboutComponent,
    DeliveryComponent,
    PaymentComponent
  ],
  exports: [
    AboutComponent,
    DeliveryComponent,
    PaymentComponent
  ]
})
export class InformationModule { }
