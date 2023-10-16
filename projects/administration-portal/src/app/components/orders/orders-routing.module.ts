import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { registerLocaleData } from '@angular/common';
import localeBY  from '@angular/common/locales/ru-BY';
import { AuthGuard } from '../../core/guards/authorized.guard';
registerLocaleData(localeBY);

const routes: Routes = [
  { path: '', component: OrderListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru-BY'
  },
]
})
export class OrdersRoutingModule { }
