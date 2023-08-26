import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from './models/menu-item';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  @Input() menuItems: IMenuItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
