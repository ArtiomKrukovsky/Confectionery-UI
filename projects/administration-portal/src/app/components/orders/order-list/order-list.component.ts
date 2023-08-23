import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public paginationStartNumber: number = 1;
  public paginationEndNumber: number = 9;

  constructor() { }

  ngOnInit() {
  }

}
