import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  isVisible$ = new BehaviorSubject<boolean>(false);

  public open() {
    this.isVisible$.next(true);
  }

  public close() {
    this.isVisible$.next(false);
  }

  constructor() { }
  
}
