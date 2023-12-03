import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { TabMenuModule } from '../../shared/components/tab-menu/tab-menu.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderTableComponent } from './order-table/order-table.component';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { OrderTableToolbarComponent } from './order-table/order-table-toolbar/order-table-toolbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TabMenuModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [
    OrderListComponent,
    OrderTableComponent,
    OrderTableToolbarComponent
  ],
  exports: [OrderListComponent]
})
export class OrdersModule { }
