import { Component, Input, OnInit } from '@angular/core';
import { IPie } from '../api/models/pie';

@Component({
  selector: 'app-pie-details',
  templateUrl: './pie-details.component.html',
  styleUrls: ['./pie-details.component.scss']
})
export class PieDetailsComponent implements OnInit {
  @Input() pie: IPie;

  public isDetails: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
