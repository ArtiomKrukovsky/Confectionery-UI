import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IConfection } from '../api/models/confection';
import { ConfectionApi } from '../api/confection.api';
import { ErrorHandleService } from '../../../services/error-handle.service';
import { ConfectionType } from '../../../shared/enums/confection-type.enum';
import { ConfectionTitlesByTypeMap } from '../../../shared/maps/confection-type.map';

@Injectable({
  providedIn: 'root'
})
export class ConfectionService implements OnDestroy {
  public get Confections(): Observable<IConfection[]> {
    return this.confections$.asObservable();
  }

  public get SelectedConfection() : Observable<IConfection> {
    return this.selectedConfection$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  private defaultConfection: IConfection = {
    name: '',
    description: '',
    price: 0,
    weight: 0,
    minimumOrderCount: 1,
    confectionType: ConfectionType.Default,
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
    private errorHandlerService: ErrorHandleService
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

  public fetchConfections(): void {
    this.isLoading$.next(true);

    this.confectionApi.getAllConfection()
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe({
      next: (confections) => this.confections$.next(confections),
      error: (error) => this.errorHandlerService.handle(error)
    })
  }

  public fetchConfection(id: number): void {
    this.isLoading$.next(true);

    this.confectionApi.getConfection(id)
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe({
      next: (confection) => this.selectedConfection$.next(confection),
      error: (error) => this.errorHandlerService.handle(error)
    })
  }

  public computeConfectionTitle(confectionType: ConfectionType): string {
    return ConfectionTitlesByTypeMap.get(confectionType);
  }
}
