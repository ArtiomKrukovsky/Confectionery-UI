import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConfection } from '../api/models/confection';

@Component({
  selector: 'app-confection-details',
  templateUrl: './confection-details.component.html',
  styleUrls: ['./confection-details.component.scss']
})
export class ConfectionDetailsComponent implements OnInit {
  @Input() confection: IConfection;

  public isDetails: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  public openProductView() : void {
    this.router.navigateByUrl(`cakes/${this.confection.id}`)
  }
}
