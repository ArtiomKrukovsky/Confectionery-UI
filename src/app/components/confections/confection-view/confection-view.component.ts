import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { IConfection } from '../api/models/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-view',
  templateUrl: './confection-view.component.html',
  styleUrls: ['./confection-view.component.scss']
})
export class ConfectionViewComponent implements OnInit, OnDestroy {
  public confection: IConfection;
  public isLoading: boolean;

  public confectionId: string;
  public confectionCount: number = 1;

  public isDisplayModal: boolean;

  private subscriptions$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private popupService: PopupService,
    public confectionService: ConfectionService
  ) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit() {
    this.confectionId = this.activatedRoute.snapshot.params['id'];
    this.confectionService.fetchConfection(this.confectionId);

    // use behaviour subject handlers
    this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public orderConfection(): void {
    this.popupService.open();
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.confectionService.SelectedConfection.subscribe(selectedConfection => this.confection = selectedConfection));
    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
