import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMenuItem } from '../../../shared/components/tab-menu/models/menu-item';
import { OrderService } from '../services/order.service';
import { Subscription } from 'rxjs';
import { IOrderDetail } from '../api/models/order-detail';
import { IQueryParameters } from '../../../shared/models/query-parameters';
import { IPagedList } from '../../../shared/models/paged-list';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {
  public paginatedOrders: IPagedList<IOrderDetail>;
  public isLoading: boolean;

  public currentPage: number = 1;
  public pageSize: number = 10;
  public totalPages: number; // we can remove this
  public totalCount: number;

  public searchTerm: string = '';

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
    const orderQueryParameters = this.computeOrderQueryParameters();
    this.orderService.fetchPaginatedOrders(orderQueryParameters);
  }
  
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;

    const orderQueryParameters = this.computeOrderQueryParameters();
    this.orderService.fetchPaginatedOrders(orderQueryParameters);
  }

  public search(searchTerm: string): void {
    this.searchTerm = searchTerm;

    const orderQueryParameters = this.computeOrderQueryParameters();
    this.orderService.fetchPaginatedOrders(orderQueryParameters);
  }

  private computeOrderQueryParameters(): IQueryParameters {
    return {
      pageNumber: this.currentPage,
      pageSize: this.pageSize,
      searchTerm: this.searchTerm
    } as IQueryParameters;
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.orderService.PaginatedOrders.subscribe(paginatedOrders => { 
      this.paginatedOrders = paginatedOrders;
      this.pageSize = paginatedOrders.pageSize;
      this.totalPages = paginatedOrders.totalPages;
      this.totalCount = paginatedOrders.totalCount;
    }));

    this.subscriptions$.add(this.orderService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
