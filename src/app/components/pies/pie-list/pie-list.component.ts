import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { IPie } from '../api/models/pie';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.scss']
})
export class PieListComponent implements OnInit, OnDestroy {
  public pies: IPie[];
  public isLoading: boolean;

  public term: string = '';
  public isDisplayModal: boolean;

  private subscriptions$: Subscription;

  constructor(
    public pieService: PieService,
    public popupService: PopupService
  ) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToPieService();
  }

  ngOnInit() {
    this.pieService.fetchPies();

    // use behaviour subject handlers
    this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public displayModal(): void {
    this.popupService.open();
  }

  private subscribeToPieService(): void {
    this.subscriptions$.add(this.pieService.Pies.subscribe(pies => this.pies = pies));
    this.subscriptions$.add(this.pieService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
