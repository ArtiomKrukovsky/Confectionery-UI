import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.scss']
})
export class PieListComponent implements OnInit {
  public term: string = '';
  public isDisplayModal: boolean;

  constructor(
    public pieService: PieService,
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.pieService.fetchPies();

    // use behaviour subject handlers
    this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value);
  }

  public displayModal() {
    this.popupService.open();
  }
}
