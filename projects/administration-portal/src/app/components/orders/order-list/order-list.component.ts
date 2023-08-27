import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../../shared/components/tab-menu/models/menu-item';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public menuItems: IMenuItem[] = [
    {
      label: 'В обработке',
      routerLink: '#'
    },
    {
      label: 'Все Заказы',
      routerLink: '#',
      isSelected: true
    },
    {
      label: 'Завершённые',
      routerLink: '#'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
