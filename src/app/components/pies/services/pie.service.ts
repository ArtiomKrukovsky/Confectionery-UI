import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IPie } from '../api/models/pie';
import { PieApi } from '../api/pie.api';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  // todo: extract behavior subjects

  public pies: IPie[];
  public selectedPie?: IPie;

  public isLoading: boolean = true;

  constructor(private pieApi: PieApi) { }

  public fetchPies() : void {
    this.isLoading = true;

    this.pieApi.getAll()
    .pipe(
      tap(() => this.isLoading = false)
    )
    .subscribe(pies => {
      this.pies = pies;
    });
  }

  public fetchPie(id: string) : void {
    this.pieApi.get(id)
    .pipe(
      tap(() => this.isLoading = false)
    )
    .subscribe(pie => 
      this.selectedPie = pie
    );
  }

  public savePie(pie: IPie) : void {
    this.pieApi.save(pie)
    .pipe(
      tap(() => this.pies.push(pie))
    )
    .subscribe()
  }

  public updatePie(pie: IPie) : void {
    this.pieApi.update(pie)
    .subscribe()
  }

  public destroyPie() : void {
    this.selectedPie = undefined;
  }
}
