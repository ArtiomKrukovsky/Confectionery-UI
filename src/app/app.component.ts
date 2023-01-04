import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResolverService } from './services/resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public isLoading: boolean;

  private subscriptions$: Subscription;

  constructor(
    private progressSpinnerService: ResolverService
  ) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  private subscribeToServices() {
    this.subscriptions$.add(this.progressSpinnerService.isLoading$.subscribe(isLoading => this.isLoading = isLoading));
  }
}
