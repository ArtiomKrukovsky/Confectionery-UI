import { Component, Input, OnInit } from '@angular/core';
import { BadgeTheme } from './theme/badge-theme';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() badgeText: string = '';
  @Input() badgeTheme: BadgeTheme = 'default';

  constructor() { }

  ngOnInit() {
  }
}
