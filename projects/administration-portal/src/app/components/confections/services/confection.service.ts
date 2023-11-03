import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IConfection } from '../api/models/confection';
import { ConfectionApi } from '../api/confection.api';
import { ErrorHandleService } from '../../../services/error-handle.service';
import { ConfectionType } from '../../../shared/enums/confection-type.enum';
import { ConfectionTitlesByTypeMap } from '../../../shared/maps/confection-type.map';
import { IPagedList } from '../../../shared/models/paged-list';
import { IQueryParameters } from '../../../shared/models/query-parameters';

@Injectable({
  providedIn: 'root'
})
export class ConfectionService implements OnDestroy {
  public get PaginatedConfections(): Observable<IPagedList<IConfection>> {
    return this.paginatedConfections$.asObservable();
  }

  public get SelectedConfection() : Observable<IConfection> {
    return this.selectedConfection$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  private defaultPaginatedConfections: IPagedList<IConfection> = {
    items: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0
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

  private paginatedConfections$: BehaviorSubject<IPagedList<IConfection>>;
  private selectedConfection$: BehaviorSubject<IConfection>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(
    private confectionApi: ConfectionApi,
    private errorHandlerService: ErrorHandleService
  ) { 
    this.paginatedConfections$ = new BehaviorSubject<IPagedList<IConfection>>(this.defaultPaginatedConfections);
    this.selectedConfection$ = new BehaviorSubject<IConfection>(this.defaultConfection);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  ngOnDestroy(): void {
    this.paginatedConfections$.next(this.defaultPaginatedConfections);
    this.paginatedConfections$.complete();
    this.selectedConfection$.next(this.defaultConfection);
    this.selectedConfection$.complete();
    this.isLoading$.next(false);
    this.isLoading$.complete();
  }

  public fetchPaginatedConfections(queryParameters: IQueryParameters): void {
    this.isLoading$.next(true);

    this.confectionApi.getPaginatedConfections(queryParameters)
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe({
      next: (confections) => this.paginatedConfections$.next(confections),
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
