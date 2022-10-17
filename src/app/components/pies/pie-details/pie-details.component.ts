import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPie } from '../api/models/pie';

@Component({
  selector: 'app-pie-details',
  templateUrl: './pie-details.component.html',
  styleUrls: ['./pie-details.component.scss']
})
export class PieDetailsComponent implements OnInit {
  @Input() pie: IPie;

  public isDetails: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  public openProductView() : void {
    this.router.navigateByUrl(`pies/${this.pie.id}`)
  }
}
