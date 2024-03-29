import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { ResolverService } from 'src/app/services/resolver.service';
import { ConfectionType } from '../../../shared/enums/confection-type.enum';
import { IConfectionMapping } from '../api/models/confection/confection-mapping';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-catalog',
  templateUrl: './confection-catalog.component.html',
  styleUrls: ['./confection-catalog.component.scss']
})
export class ConfectionCatalogComponent implements OnInit, OnDestroy {
  public confectionMappings: IConfectionMapping[];
  public isLoading: boolean;

  private subscriptions$: Subscription;

  constructor(
    public popupService: PopupService,
    private confectionService: ConfectionService,
    private progressSpinnerService: ResolverService,
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

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public computeSectionRoute(confectionType: ConfectionType): string {
    return this.confectionService.computeConfectionRoute(confectionType);
  }

  private subscribeToServices() {
    this.subscriptions$.add(this.progressSpinnerService.isLoading$.subscribe(value => this.isLoading = value));
  }
}
