import { Component, OnDestroy, OnInit } from '@angular/core';
import { IConfection } from '../api/models/confection';
import { Subscription } from 'rxjs';
import { ConfectionService } from '../services/confection.service';
import { IPagedList } from '../../../shared/models/paged-list';
import { IQueryParameters } from '../../../shared/models/query-parameters';

@Component({
  selector: 'app-confection-list',
  templateUrl: './confection-list.component.html',
  styleUrls: ['./confection-list.component.scss']
})
export class ConfectionListComponent implements OnInit, OnDestroy {
  public paginatedConfections: IPagedList<IConfection>;
  public isLoading: boolean;

  public currentPage: number = 1;
  public pageSize: number = 10;
  public totalPages: number; // we can remove this
  public totalCount: number;

  public searchTerm: string = '';

  private subscriptions$: Subscription;

  constructor(private confectionService: ConfectionService) { 
    this.subscriptions$ = new Subscription();
    this.subsribeToServices();
  }

  ngOnInit() {
    const confectionQueryParameters = this.computeConfectionQueryParameters();
    this.confectionService.fetchPaginatedConfections(confectionQueryParameters);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  public onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;

    const confectionQueryParameters = this.computeConfectionQueryParameters();
    this.confectionService.fetchPaginatedConfections(confectionQueryParameters);
  }

  private computeConfectionQueryParameters(): IQueryParameters {
    return {
      pageNumber: this.currentPage,
      pageSize: this.pageSize,
      searchTerm: this.searchTerm
    } as IQueryParameters;
  }

  private subsribeToServices(): void {
    this.subscriptions$.add(this.confectionService.PaginatedConfections.subscribe(paginatedConfections => {
      this.paginatedConfections = paginatedConfections;
      this.pageSize = paginatedConfections.pageSize;
      this.totalPages = paginatedConfections.totalPages;
      this.totalCount = paginatedConfections.totalCount;
    }));

    this.subscriptions$.add(this.confectionService.IsLoading.subscribe(isLoading => this.isLoading = isLoading));
  }
}
