import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { TabMenuModule } from '../../shared/components/tab-menu/tab-menu.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderTableComponent } from './order-table/order-table.component';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TabMenuModule,
    ToolbarModule,
    PaginationModule
  ],
  declarations: [
    OrderListComponent,
    OrderTableComponent
  ],
  exports: [OrderListComponent]
})
export class OrdersModule { }
