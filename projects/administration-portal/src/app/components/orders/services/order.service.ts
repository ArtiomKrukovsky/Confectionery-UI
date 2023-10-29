import { Injectable, OnDestroy } from '@angular/core';
import { OrderApi } from '../api/order.api';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IOrderDetail } from '../api/models/order-detail';
import { ErrorHandleService } from '../../../services/error-handle.service';
import { StatusType } from '../../../shared/enums/status-type.enum';
import { StatusTitlesByTypeMap } from '../../../shared/maps/status-type.map';
import { IQueryParameters } from '../../../shared/models/query-parameters';
import { IPagedList } from '../../../shared/models/paged-list';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

  public get PaginatedOrders(): Observable<IPagedList<IOrderDetail>> {
    return this.paginatedOrders$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  private defaultPaginatedOrders: IPagedList<IOrderDetail> = {
    items: [],
    currentPage: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0
  }

  private paginatedOrders$: BehaviorSubject<IPagedList<IOrderDetail>>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(
    private orderApi: OrderApi,
    private errorHandleService: ErrorHandleService
  ) { 
    this.paginatedOrders$ = new BehaviorSubject<IPagedList<IOrderDetail>>(this.defaultPaginatedOrders);
    this.isLoading$ = new BehaviorSubject<boolean>(false); 
  }

  ngOnDestroy(): void {
    this.paginatedOrders$.next(this.defaultPaginatedOrders);
    this.paginatedOrders$.complete();
    this.isLoading$.next(false);
    this.isLoading$.complete();
  }

  public fetchPaginatedOrders(queryParameters: IQueryParameters) : void {
    this.isLoading$.next(true);

    this.orderApi.getPaginatedOrders(queryParameters)
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe({
      next: (paginatedOrders) => this.paginatedOrders$.next(paginatedOrders),
      error: (error) => this.errorHandleService.handle(error)
    })
  }

  public computeStatusTitle(status: StatusType) : string {
    return StatusTitlesByTypeMap.get(status);
  }
}
