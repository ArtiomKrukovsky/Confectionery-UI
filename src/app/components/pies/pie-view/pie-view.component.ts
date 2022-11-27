import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { IPie } from '../api/models/pie';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-pie-view',
  templateUrl: './pie-view.component.html',
  styleUrls: ['./pie-view.component.scss']
})
export class PieViewComponent implements OnInit, OnDestroy {
  public selectedPie: IPie;
  public isLoading: boolean;

  public pieId: string;
  public pieCount: number = 1;

  public isDisplayModal: boolean;

  private subscriptions$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private popupService: PopupService,
    public pieService: PieService
  ) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToPieService();
  }

  ngOnInit() {
    this.pieId = this.activatedRoute.snapshot.params['id'];
    this.pieService.fetchPie(this.pieId);

    // use behaviour subject handlers
    this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public orderPie(): void {
    this.popupService.open();
  }

  private subscribeToPieService(): void {
    this.subscriptions$.add(this.pieService.SelectedPie.subscribe(selectedPie => this.selectedPie = selectedPie));
    this.subscriptions$.add(this.pieService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
