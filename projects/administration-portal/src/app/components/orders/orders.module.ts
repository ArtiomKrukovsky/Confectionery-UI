import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { TabMenuModule } from '../../shared/components/tab-menu/tab-menu.module';

@NgModule({
  imports: [
    CommonModule,
    TabMenuModule
  ],
  declarations: [OrderListComponent],
  exports: [OrderListComponent]
})
export class OrdersModule { }
