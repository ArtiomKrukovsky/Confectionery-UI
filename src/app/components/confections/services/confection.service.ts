import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IConfection } from '../api/models/confection';
import { ConfectionApi } from '../api/confection.api';
import { IConfectionMapping } from '../api/models/confectionMapping';

@Injectable({
  providedIn: 'root'
})
export class ConfectionService implements OnDestroy {

  public get ConfectionMappings(): Observable<IConfectionMapping[]> {
    return this.confectionMappings$.asObservable();
  } 

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
    imageUrl: '',
    minimumPortions: 0,
    maximumPortions: 0,
    ingredients: []
  }

  private confectionMappings$: BehaviorSubject<IConfectionMapping[]>;
  private confections$: BehaviorSubject<IConfection[]>;
  private selectedConfection$: BehaviorSubject<IConfection>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(private confectionApi: ConfectionApi) { 
    this.confectionMappings$ = new BehaviorSubject<IConfectionMapping[]>([]); 
    this.confections$ = new BehaviorSubject<IConfection[]>([]);
    this.selectedConfection$ = new BehaviorSubject<IConfection>(this.defaultConfection);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  ngOnDestroy(): void {
    this.confectionMappings$.next([]);
    this.confectionMappings$.complete();
    this.confections$.next([]);
    this.confections$.complete();
    this.selectedConfection$.next(this.defaultConfection);
    this.selectedConfection$.complete();
    this.isLoading$.next(false);
    this.isLoading$.complete();
  }

  public fetchConfectionMappings() : void {
    this.isLoading$.next(true);

    this.confectionApi.getAllConfectionMappings()
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe(confectionMappings => {
      this.confectionMappings$.next(confectionMappings);
    });
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
    .subscribe(confection => {
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

  public updateConfection(confection: IConfection) : void {
    // update confection subject
    this.confectionApi.update(confection)
    .subscribe()
  }
}
