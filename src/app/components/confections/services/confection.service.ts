import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { IConfection } from '../api/models/confection/confection';
import { ConfectionApi } from '../api/confection.api';
import { ConfectionRoutesByTypeMap, ConfectionTitlesByTypeMap } from 'src/app/shared/maps/confection-type.map';
import { ConfectionType } from 'src/app/shared/enums/confection-type.enum';
import { ErrorHandleService } from 'src/app/services/error-handle.service';
import { ORDER_TITLE, SUCCESS_ORDER_MESSAGE } from 'src/app/shared/constants/notification.constants';
import { NotificationMessage } from 'src/app/services/notification/models/notification-message';
import { IUser } from '../api/models/user/user';
import { UserApi } from '../api/user.api';
import { PopupService } from 'src/app/services/popup.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { OrderApi } from '../api/order.api';
import { IOrder } from '../api/models/order/order';

@Injectable({
  providedIn: 'root'
})
export class ConfectionService implements OnDestroy {

  public get Confections(): Observable<IConfection[]> {
    return this.confections$.asObservable();
  } 

  public get SelectedConfection(): Observable<IConfection> {
    return this.selectedConfection$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  //todo: move to constans
  private defaultConfection: IConfection = {
    name: '',
    description: '',
    price: 0,
    weight: 0,
    minimumOrderCount: 1,
    isOrderCountLimited: false,
    isOutOfStock: false,
    pictures: [
      {
        id: '',
        shortName: '',
        url: ''
      }
    ]
  }

  private confections$: BehaviorSubject<IConfection[]>;
  private selectedConfection$: BehaviorSubject<IConfection>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(
    private confectionApi: ConfectionApi,
    private userApi: UserApi,
    private orderApi: OrderApi,
    private popupService: PopupService,
    private notificationService: NotificationService,
    private errorHandleService: ErrorHandleService
  ) { 
    this.confections$ = new BehaviorSubject<IConfection[]>([]);
    this.selectedConfection$ = new BehaviorSubject<IConfection>(this.defaultConfection);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  ngOnDestroy(): void {
    this.confections$.next([]);
    this.confections$.complete();
    this.selectedConfection$.next(this.defaultConfection);
    this.selectedConfection$.complete();
    this.isLoading$.next(false);
    this.isLoading$.complete();
  }

  public fetchConfections() : void {
    this.isLoading$.next(true);

    this.confectionApi.getAllConfections()
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe({
      next: (confections) => this.confections$.next(confections), 
      error: (error) => this.errorHandleService.handle(error)
    });
  }

  public fetchConfection(id: string) : void {
    this.isLoading$.next(true);

    this.confectionApi.getConfection(id)
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe({
      next: (confection) => this.selectedConfection$.next(confection), 
      error: (error) => this.errorHandleService.handle(error)
    });
  }

  public orderConfection(
    confectionId: string,
    unitPrice: number,
    quantity: number,
    fullName: string, 
    email: string, 
    instagramProfile: string, 
    mobileNumber: string
  ): void {
    const newUser: IUser = {
      fullName: fullName,
      email: email,
      instagramProfile: instagramProfile,
      mobileNumber: mobileNumber
    }

    this.userApi.getUser(newUser.email)
    .pipe(
      switchMap(user => {
        if(user) {
          const userId = user.id as string;
          return of(userId);
        }
        
        return this.userApi.createUser(newUser);
      }),
      switchMap(userId => {
        const order: IOrder = {
          confectionId: confectionId,
          unitPrice: unitPrice,
          userId: userId,
          quantity: quantity
        }

        return this.orderApi.createOrder(order)
      })
    )
    .subscribe({
      next: () => {
        const successMessage: NotificationMessage = {
          title: ORDER_TITLE,
          message: SUCCESS_ORDER_MESSAGE
        }
        
        this.notificationService.showSuccess(successMessage);
      }, 
      error: (error) => this.errorHandleService.handle(error),
      complete: () => this.popupService.close()
    });
  }

  public saveConfection(confection: IConfection) : void {
    this.confectionApi.save(confection)
    .pipe(
      tap(() => this.confections$.next([...this.confections$.value, confection]))
    )
    .subscribe()
  }

  public computeConfectionRoute(confectionType: ConfectionType): string {
    return ConfectionRoutesByTypeMap.get(confectionType);
  }

  public computeConfectionTitle(confectionType: ConfectionType): string {
    return ConfectionTitlesByTypeMap.get(confectionType);
  }
}
