import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popup.service';
import { ConfectionType } from '../api/enums/confection-type.enum';
import { IConfection } from '../api/models/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-section',
  templateUrl: './confection-section.component.html',
  styleUrls: ['./confection-section.component.scss']
})
export class ConfectionSectionComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() confections: IConfection[];

  public isLoading: boolean;

  public term: string = '';
  public isDisplayModal: boolean;

  private subscriptions$: Subscription;

  constructor(
    public confectionService: ConfectionService,
    public popupService: PopupService
  ) { 
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit() {
    this.confectionService.fetchConfections();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public displayModal(): void {
    this.popupService.open();
  }

  private subscribeToServices(): void {
    this.subscriptions$.add(this.confectionService.Confections.subscribe(confections => this.confections = confections));
    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
    this.subscriptions$.add(this.popupService.isVisible$.subscribe(value => this.isDisplayModal = value));
  }
}
