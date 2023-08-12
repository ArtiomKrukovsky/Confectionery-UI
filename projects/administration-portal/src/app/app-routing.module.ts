import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'orders', component: OrderListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
