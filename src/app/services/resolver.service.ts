import { Injectable } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, map, merge, Observable } from 'rxjs';

/* 
  The service was created to handle resolver events
  it's needed to resolve archor navigation problem
  the problem might be solved in new versions of angular
*/
@Injectable({
  providedIn: 'root'
})
export class ResolverService {
  public isLoading$: Observable<boolean>; 

  private _showLoader$: Observable<boolean>; 
  private _hideLoader$: Observable<boolean>; 

  constructor(private router: Router) { 
    this.onResolveListener();
  }

  private onResolveListener(): void {
    this._showLoader$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      map(() => true)
    );

    this._hideLoader$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      map(() => false)
    );

    this.isLoading$ = merge(this._hideLoader$, this._showLoader$);
  }
}
