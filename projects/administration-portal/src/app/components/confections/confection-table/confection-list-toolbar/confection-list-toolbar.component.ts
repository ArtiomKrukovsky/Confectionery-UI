import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-confection-list-toolbar',
  templateUrl: './confection-list-toolbar.component.html',
  styleUrls: ['./confection-list-toolbar.component.scss'],
})
export class ConfectionListToolbarComponent implements OnInit {
  public searchTerm: string = '';
  @Output() searchChanged: EventEmitter<string> = new EventEmitter();

  private searchTermChanged$: Subject<string> = new Subject<string>();
  private subscription$: Subscription;

  private readonly DEBOUNCE_SEARCH_TIME = 500;

  constructor() {}

  ngOnInit() {
    this.subscription$ = this.searchTermChanged$
      .pipe(
        debounceTime(this.DEBOUNCE_SEARCH_TIME),
        filter((searchTerm) => searchTerm.length > 2 || searchTerm == '')
      )
      .subscribe((searchTerm) => {
        this.searchChanged.emit(searchTerm);
      });
  }

  ngOnDestroy(): void {
    this.searchTermChanged$.complete();
    this.subscription$.unsubscribe();
  }

  public search(): void {
    this.searchTermChanged$.next(this.searchTerm);
  }
}
