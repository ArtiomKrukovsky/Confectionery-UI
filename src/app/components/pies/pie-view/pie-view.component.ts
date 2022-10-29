import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopupService } from 'src/app/services/popup.service';
import { IPie } from '../api/models/pie';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-pie-view',
  templateUrl: './pie-view.component.html',
  styleUrls: ['./pie-view.component.scss']
})
export class PieViewComponent implements OnInit, OnDestroy {
  public pieId: string;
  public pieCount: number = 1;

  public isDisplayModal: boolean;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private popupService: PopupService,
    public pieService: PieService
  ) { }

  ngOnInit() {
    this.pieId = this.activatedRoute.snapshot.params['id'];
    this.pieService.fetchPie(this.pieId);

    // use behaviour subject handlers
    this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value);
  }

  public orderPie(): void {
    this.popupService.open();
  }

  ngOnDestroy(): void {
    this.pieService.destroyPie();
  }
}
