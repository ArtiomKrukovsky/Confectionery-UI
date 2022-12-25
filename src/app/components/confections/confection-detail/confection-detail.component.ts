import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { IConfection } from '../api/models/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-detail',
  templateUrl: './confection-detail.component.html',
  styleUrls: ['./confection-detail.component.scss']
})
export class ConfectionDetailComponent implements OnInit, OnDestroy {
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
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public orderConfection(): void {
    this.popupService.open();
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.confectionService.SelectedConfection.subscribe(selectedConfection => {
      this.confection = selectedConfection;
      this.setDefaultConfectionCount();
    }));

    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
    this.subscriptions$.add(this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value));
  }

  private setDefaultConfectionCount(): void {
    this.confectionCount = this.confection.minimumOrderCount ?? 1;
  }
}
