import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalPages: number;
  @Input() totalCount: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public goToNextPage(): void {
    if (!this.hasNextPage()) {
      return;
    }

    const nextPageNumber = this.currentPage + 1;
    this.currentPage = nextPageNumber;

    this.pageChanged.emit(nextPageNumber);
  }

  public goToPreviousPage(): void {
    if (!this.hasPreviousPage()) {
      return;
    }

    const previousPageNumber = this.currentPage - 1;
    this.currentPage = previousPageNumber;

    this.pageChanged.emit(previousPageNumber);
  }

  public goToFirstPage(): void {
    if (!this.hasPreviousPage()) {
      return;
    }

    const firstPageNumber = 1;
    this.currentPage = firstPageNumber;

    this.pageChanged.emit(firstPageNumber);
  }

  public goToLastPage(): void {
    if (!this.hasNextPage()) {
      return;
    }

    const lastPageNumber = this.totalPages;
    this.currentPage = lastPageNumber;

    this.pageChanged.emit(lastPageNumber);
  }

  public hasNextPage(): boolean {
    return this.currentPage < this.totalPages && this.pageSize != 0;
  }

  public hasPreviousPage(): boolean {
    return this.currentPage > 1 && this.pageSize != 0;
  }
}
