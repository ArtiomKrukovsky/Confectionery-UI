import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPie } from '../api/models/pie';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-pie-view',
  templateUrl: './pie-view.component.html',
  styleUrls: ['./pie-view.component.scss']
})
export class PieViewComponent implements OnInit, OnDestroy {
  private pieId: string;

  constructor(
    private activatedRoute: ActivatedRoute, 
    public pieService: PieService
  ) { }

  ngOnInit() {
    this.pieId = this.activatedRoute.snapshot.params['id'];
    this.pieService.fetchPie(this.pieId);
  }

  ngOnDestroy(): void {
    this.pieService.destroyPie();
  }
}
