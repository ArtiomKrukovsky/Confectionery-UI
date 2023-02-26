import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { 
    path: 'about', 
    component: AboutComponent
  },
  { 
    path: 'delivery', 
    component: DeliveryComponent
  },
  { 
    path: 'payment', 
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
