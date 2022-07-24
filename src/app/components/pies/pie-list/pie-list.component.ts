import { Component, OnInit } from '@angular/core';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-pie-list',
  templateUrl: './pie-list.component.html',
  styleUrls: ['./pie-list.component.css']
})
export class PieListComponent implements OnInit {
  public term: string = '';

  constructor(public pieService: PieService) { }

  ngOnInit() {
    this.pieService.fetchPies();
  }
}
