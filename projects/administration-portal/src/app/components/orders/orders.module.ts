import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { TabMenuModule } from '../../shared/components/tab-menu/tab-menu.module';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TabMenuModule
  ],
  declarations: [OrderListComponent],
  exports: [OrderListComponent]
})
export class OrdersModule { }
