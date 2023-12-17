import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-order-table-toolbar',
  templateUrl: './order-table-toolbar.component.html',
  styleUrls: ['./order-table-toolbar.component.scss'],
})
export class OrderTableToolbarComponent implements OnInit, OnDestroy {
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
