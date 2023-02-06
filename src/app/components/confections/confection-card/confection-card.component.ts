import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { computeOrderLimitaionText } from 'src/app/shared/constants/order.constants';
import { ConfectionType } from 'src/app/shared/enums/confection-type.enum';
import { IConfection } from '../api/models/confection/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-card',
  templateUrl: './confection-card.component.html',
  styleUrls: ['./confection-card.component.scss']
})
export class ConfectionCardComponent implements OnInit {
  @Input() confectionType: ConfectionType;
  @Input() confection: IConfection;

  constructor(
    private confectionService: ConfectionService, 
    private router: Router
  ) { }

  ngOnInit() {}

  public openProductDetail() : void {
    this.router.navigateByUrl(`${this.computeSectionRoute()}/${this.confection.id}`);
  }

  public computeBadgeLimitationText(): string {
    return computeOrderLimitaionText(this.confection.minimumOrderCount);
  }

  private computeSectionRoute(): string {
    return this.confectionService.computeConfectionRoute(this.confectionType);
  }
}
