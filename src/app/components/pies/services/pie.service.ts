import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IPie } from '../api/models/pie';
import { PieApi } from '../api/pie.api';

@Injectable({
  providedIn: 'root'
})
export class PieService implements OnDestroy {

  public get Pies(): Observable<IPie[]> {
    return this.pies$.asObservable();
  } 

  public get SelectedPie(): Observable<IPie> {
    return this.selectedPie$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  //todo: move to constans
  private defaultPie: IPie = {
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    minimumPortions: 0,
    maximumPortions: 0,
    ingredients: []
  }

  private pies$: BehaviorSubject<IPie[]>;
  private selectedPie$: BehaviorSubject<IPie>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(private pieApi: PieApi) { 
    this.pies$ = new BehaviorSubject<IPie[]>([]);
    this.selectedPie$ = new BehaviorSubject<IPie>(this.defaultPie);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  ngOnDestroy(): void {
    this.pies$.next([]);
    this.pies$.complete();
    this.selectedPie$.next(this.defaultPie);
    this.selectedPie$.complete();
    this.isLoading$.next(false);
    this.isLoading$.complete();
  }

  public fetchPies() : void {
    this.isLoading$.next(true);

    this.pieApi.getAll()
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe(pies => {
      this.pies$.next(pies);
    });
  }

  public fetchPie(id: string) : void {
    this.isLoading$.next(true);

    this.pieApi.get(id)
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe(pie => {
      this.selectedPie$.next(pie);
    });
  }

  public savePie(pie: IPie) : void {
    this.pieApi.save(pie)
    .pipe(
      tap(() => this.pies$.next([...this.pies$.value, pie]))
    )
    .subscribe()
  }

  public updatePie(pie: IPie) : void {
    // update pie subject
    this.pieApi.update(pie)
    .subscribe()
  }
}
