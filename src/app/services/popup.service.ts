import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowScrollingService } from './window-scrolling.service';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public isVisible$ = new BehaviorSubject<boolean>(false);

  constructor(private windowScrollingService: WindowScrollingService) { }

  public open() {
    this.windowScrollingService.disableScrolling();
    this.isVisible$.next(true);
  }

  public close() {
    this.windowScrollingService.enableScrolling();
    this.isVisible$.next(false);
  }
}
