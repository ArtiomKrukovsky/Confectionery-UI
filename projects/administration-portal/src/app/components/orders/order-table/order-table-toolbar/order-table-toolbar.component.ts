import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-table-toolbar',
  templateUrl: './order-table-toolbar.component.html',
  styleUrls: ['./order-table-toolbar.component.scss']
})
export class OrderTableToolbarComponent implements OnInit {
  public searchTerm: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  public search(): void {
    this.onSearch.emit(this.searchTerm);
  }
}
