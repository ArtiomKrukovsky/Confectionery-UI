import { PopupService } from './../../../services/popup.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IConfection } from '../api/models/confection';
import { Subscription } from 'rxjs';
import { ConfectionService } from '../services/confection.service';
import { IPagedList } from '../../../shared/models/paged-list';
import { IQueryParameters } from '../../../shared/models/query-parameters';

@Component({
  selector: 'app-confection-list',
  templateUrl: './confection-list.component.html',
  styleUrls: ['./confection-list.component.scss'],
})
export class ConfectionListComponent implements OnInit, OnDestroy {
  public paginatedConfections: IPagedList<IConfection>;
  public isLoading: boolean;

  public currentPage: number = 1;
  public pageSize: number = 10;
  public totalCount: number;

  public isDisplayCreatationModal: boolean = false;
  public searchTerm: string = '';

  private subscriptions$: Subscription;

  constructor(
    private confectionService: ConfectionService,
    private popupService: PopupService
  ) {
    this.subscriptions$ = new Subscription();
    this.subsribeToServices();
  }

  ngOnInit() {
    this.fetchPaginatedConfections();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public displayCreationModal(): void {
    this.popupService.open();
  }

  public onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;

    this.fetchPaginatedConfections();
  }

  public onSearchChanged(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.currentPage = 1;

    this.fetchPaginatedConfections();
  }

  private fetchPaginatedConfections(): void {
    const confectionQueryParameters = this.computeConfectionQueryParameters();
    this.confectionService.fetchPaginatedConfections(confectionQueryParameters);
  }

  private computeConfectionQueryParameters(): IQueryParameters {
    return {
      pageNumber: this.currentPage,
      pageSize: this.pageSize,
      searchTerm: this.searchTerm,
    } as IQueryParameters;
  }

  private subsribeToServices(): void {
    this.subscriptions$.add(this.confectionService.PaginatedConfections.subscribe((paginatedConfections) => {
        this.paginatedConfections = paginatedConfections;
        this.pageSize = paginatedConfections.pageSize;
        this.totalCount = paginatedConfections.totalCount;
      })
    );

    this.subscriptions$.add(this.confectionService.IsLoading.subscribe((isLoading) => (this.isLoading = isLoading)));
    this.subscriptions$.add(this.popupService.isVisible$.subscribe(value => this.isDisplayCreatationModal = value));
  }
}
