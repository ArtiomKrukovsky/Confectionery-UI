import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { IConfection } from '../api/models/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-list',
  templateUrl: './confection-list.component.html',
  styleUrls: ['./confection-list.component.scss']
})
export class ConfectionListComponent implements OnInit, OnDestroy {
  public confections: IConfection[];
  public isLoading: boolean;

  public term: string = '';
  public isDisplayModal: boolean;

  private subscriptions$: Subscription;

  constructor(
    public confectionService: ConfectionService,
    public popupService: PopupService
  ) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit() {
    this.confectionService.fetchConfections();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public displayModal(): void {
    this.popupService.open();
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.confectionService.Confections.subscribe(confections => this.confections = confections));
    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
    this.subscriptions$.add(this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value));
  }
}
