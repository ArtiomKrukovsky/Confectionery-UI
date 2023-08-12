import { Injectable, OnDestroy } from '@angular/core';
import { OrderApi } from '../api/order.api';
import { BehaviorSubject, Observable, tap, zip } from 'rxjs';
import { IOrder } from '../api/models/order';
import { ErrorHandleService } from '../../../services/error-handle.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

  public get Orders(): Observable<IOrder[]> {
    return this.orders$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  private orders$: BehaviorSubject<IOrder[]>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(
    private orderApi: OrderApi,
    private errorHandleService: ErrorHandleService
  ) { 
    this.orders$ = new BehaviorSubject<IOrder[]>([]);
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
}
