import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, tap } from 'rxjs';
import { IConfection } from '../api/models/confection';
import { ConfectionApi } from '../api/confection.api';
import { ConfectionRoutesByTypeMap, ConfectionTitlesByTypeMap } from 'src/app/shared/maps/confection-type.map';
import { ConfectionType } from 'src/app/shared/enums/confection-type.enum';

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
    private confectionApi: ConfectionApi
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
    .subscribe(confections => {
      this.confections$.next(confections);
    });
  }

  public fetchConfection(id: string) : void {
    this.isLoading$.next(true);

    this.confectionApi.getConfection(id)
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe((confection) => {
      this.selectedConfection$.next(confection);
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
