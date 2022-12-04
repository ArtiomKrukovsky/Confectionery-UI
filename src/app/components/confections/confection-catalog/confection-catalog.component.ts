import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  private subscriptions$: Subscription;

  constructor(private confectionService: ConfectionService) {
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit(): void {
  }

  private subscribeToServices() {
    this.subscriptions$.add(this.confectionService.ConfectionMappings.subscribe(confectionMappings => this.confectionMappings = confectionMappings));
  }
}
