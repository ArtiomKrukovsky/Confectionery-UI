import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {
  error$ = new Subject<string>()

  public handle(message: string): void {
    this.error$.next(message);
  }

  public clean(): void {
    this.error$.next('');
  }
}
