import { Component, Input, OnInit } from '@angular/core';
import { IConfection } from '../api/models/confection';

@Component({
  selector: 'app-confection-table',
  templateUrl: './confection-table.component.html',
  styleUrls: ['./confection-table.component.scss']
})
export class ConfectionTableComponent implements OnInit {
  @Input() confections: IConfection[] = [];
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
