import { Component, OnDestroy, OnInit } from '@angular/core';
import { IConfection } from '../api/models/confection';
import { Subscription } from 'rxjs';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-confection-list',
  templateUrl: './confection-list.component.html',
  styleUrls: ['./confection-list.component.scss']
})
export class ConfectionListComponent implements OnInit, OnDestroy {
  public confections: IConfection[];
  public isLoading: boolean;

  private subscriptions$: Subscription;

  constructor(private confectionService: ConfectionService) { }

  ngOnInit() {
    this.subscriptions$ = new Subscription();
    this.subsribeToServices();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  private subsribeToServices(): void {
    this.subscriptions$.add(this.confectionService.Confections.subscribe(confections => this.confections = confections));
    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
