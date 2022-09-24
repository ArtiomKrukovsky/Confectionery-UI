import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.css']
})
export class PieListComponent implements OnInit {
  public term: string = '';
  public isDisplayModal: boolean;

  constructor(
    public pieService: PieService,
    public modalService: ModalService
  ) { }

  ngOnInit() {
    this.pieService.fetchPies();

    // use behaviour subject handlers
    this.modalService.isVisible$.subscribe(value => this.isDisplayModal = value);
  }

  public displayModal() {
    this.modalService.open();
  }
}
