import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../../shared/components/tab-menu/models/menu-item';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public paginationStartNumber: number = 1;
  public paginationEndNumber: number = 9;

  public menuItems: IMenuItem[] = [
    {
      label: 'В обработке',
    },
    {
      label: 'Все Заказы',
      isSelected: true
    },
    {
      label: 'Завершённые'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
