import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConfection } from '../api/models/confection';

@Component({
  selector: 'app-confection-card',
  templateUrl: './confection-card.component.html',
  styleUrls: ['./confection-card.component.scss']
})
export class ConfectionCardComponent implements OnInit {
  @Input() confection: IConfection;

  constructor(private router: Router) { }

  ngOnInit() {}

  public openProductView() : void {
    this.router.navigateByUrl(`cakes/${this.confection.id}`)
  }
}
