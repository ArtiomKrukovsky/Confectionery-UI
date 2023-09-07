import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMenuItem } from '../../../shared/components/tab-menu/models/menu-item';
import { OrderService } from '../services/order.service';
import { Subscription } from 'rxjs';
import { IOrderDetail } from '../api/models/order-detail';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {
  public orders: IOrderDetail[];
  public isLoading: boolean;

  public menuItems: IMenuItem[] = [
    {
      label: 'В обработке',
      routerLink: '#'
    },
    {
      label: 'Все Заказы',
      routerLink: '#',
      isSelected: true
    },
    {
      label: 'Завершённые',
      routerLink: '#'
    }
  ];

  private subscriptions$: Subscription;

  constructor(private orderService: OrderService) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit() {
    this.orderService.fetchOrders();
  }
  
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.orderService.Orders.subscribe(orders => this.orders = orders));
    this.subscriptions$.add(this.orderService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
