import { Injectable, OnDestroy } from '@angular/core';
import { OrderApi } from '../api/order.api';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IOrderDetail } from '../api/models/order-detail';
import { ErrorHandleService } from '../../../services/error-handle.service';
import { StatusType } from '../../../shared/enums/status-type.enum';
import { StatusTitlesByTypeMap } from '../../../shared/maps/status-type.map';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

  public get Orders(): Observable<IOrderDetail[]> {
    return this.orders$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  private orders$: BehaviorSubject<IOrderDetail[]>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(
    private orderApi: OrderApi,
    private errorHandleService: ErrorHandleService
  ) { 
    this.orders$ = new BehaviorSubject<IOrderDetail[]>([]);
    this.isLoading$ = new BehaviorSubject<boolean>(false); 
  }

  ngOnDestroy(): void {
    this.orders$.next([]);
    this.orders$.complete();
    this.isLoading$.next(false);
    this.isLoading$.complete();
  }

  public fetchOrders() : void {
    this.isLoading$.next(true);

    this.orderApi.getOrders()
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe({
      next: (orders) => this.orders$.next(orders),
      error: (error) => this.errorHandleService.handle(error)
    })
  }

  public computeStatusTitle(status: StatusType) : string {
    return StatusTitlesByTypeMap.get(status);
  }
}
