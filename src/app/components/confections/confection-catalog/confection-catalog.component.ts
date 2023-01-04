import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { ConfectionType } from '../../../shared/enums/confection-type.enum';
import { IConfectionMapping } from '../api/models/confectionMapping';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-catalog',
  templateUrl: './confection-catalog.component.html',
  styleUrls: ['./confection-catalog.component.scss']
})
export class ConfectionCatalogComponent implements OnInit {
  public confectionMappings: IConfectionMapping[];
  public isDisplayModal: boolean;

  private subscriptions$: Subscription;

  constructor(
    public popupService: PopupService,
    private confectionService: ConfectionService,
    private route: ActivatedRoute
  ) {
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit(): void {
    // the logic was transformed to resolvers, because of anchor navigation problems
    // the problem might be solved in new versions of angular
    this.route.data.subscribe(({ confectionMappings }) => {
      this.confectionMappings = confectionMappings;
    });
  }

  public displayModal(): void {
    this.popupService.open();
  }

  public computeSectionRoute(confectionType: ConfectionType): string {
    return this.confectionService.computeConfectionRoute(confectionType);
  }

  private subscribeToServices() {
    this.subscriptions$.add(this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value));
  }
}
