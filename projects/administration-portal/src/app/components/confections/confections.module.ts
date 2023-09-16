import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfectionsRoutingModule } from './confections-routing.module';
import { ConfectionListComponent } from './confection-list/confection-list.component';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { ConfectionListToolbarComponent } from './confection-table/confection-list-toolbar/confection-list-toolbar.component';
import { ConfectionTableComponent } from './confection-table/confection-table.component';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    ConfectionsRoutingModule,
    PaginationModule
  ],
  declarations: [
    ConfectionListComponent,
    ConfectionTableComponent,
    ConfectionListToolbarComponent,
    TruncatePipe
  ],
  exports: [ConfectionListComponent]
})
export class ConfectionsModule { }
