import { Component, OnInit } from '@angular/core';
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
  public isLoading: boolean;

  public isDisplayModal: boolean;

  private subscriptions$: Subscription;

  constructor(
    private confectionService: ConfectionService,
    public popupService: PopupService
  ) {
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit(): void {
    this.confectionService.fetchConfectionMappings();
  }

  public displayModal(): void {
    this.popupService.open();
  }

  public computeSectionRoute(confectionType: ConfectionType): string {
    return this.confectionService.computeConfectionRoute(confectionType);
  }

  private subscribeToServices() {
    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
    this.subscriptions$.add(this.confectionService.ConfectionMappings.subscribe(confectionMappings => this.confectionMappings = confectionMappings));
    this.subscriptions$.add(this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value));
  }
}
