import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfectionType } from 'src/app/shared/enums/confection-type.enum';
import { ConfectionRoutesByTypeMapper } from 'src/app/shared/maps/confection-type.map';
import { IConfection } from '../api/models/confection';

@Component({
  selector: 'app-confection-card',
  templateUrl: './confection-card.component.html',
  styleUrls: ['./confection-card.component.scss']
})
export class ConfectionCardComponent implements OnInit {
  @Input() confectionType: ConfectionType;
  @Input() confection: IConfection;

  constructor(private router: Router) { }

  ngOnInit() {}

  public openProductDetail() : void {
    this.router.navigateByUrl(`${this.computeConfectionRoute()}/${this.confection.id}`)
  }

  private computeConfectionRoute(): string {
    return ConfectionRoutesByTypeMapper.get(this.confectionType);
  }
}
