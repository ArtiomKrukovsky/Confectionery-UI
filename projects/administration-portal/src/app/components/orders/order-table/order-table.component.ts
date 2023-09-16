import { Component, Input, OnInit } from '@angular/core';
import { IOrderDetail } from '../api/models/order-detail';
import { OrderService } from '../services/order.service';
import { StatusType } from '../../../shared/enums/status.enum';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  @Input() orders: IOrderDetail[] = [];
  @Input() isLoading: boolean = false;

  public statusTypes = StatusType;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  public calculateTotalPrice(order: IOrderDetail): string {
    return (order.unitPrice * order.quantity).toFixed(2);
  }

  public computeStatusTitle(status: StatusType): string {
    return this.orderService.computeStatusTitle(status);
  }

  public computeStatusClass(status: StatusType): string {
    return `status--${StatusType[status].toLocaleLowerCase()}`;
  }
}
