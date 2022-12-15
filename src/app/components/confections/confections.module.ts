import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfectionCatalogComponent } from './confection-catalog/confection-catalog.component';
import { ConfectionCardComponent } from './confection-card/confection-card.component';
import { FilterConfectionsPipe } from 'src/app/shared/pipes/filter-confections.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { CreateConfectionComponent } from './create-confection/create-confection.component';
import { ConfectionDetailComponent } from './confection-detail/confection-detail.component';
import { OrderConfectionComponent } from './order-confection/order-confection.component';
import { NoProductFoundComponent } from 'src/app/shared/components/no-product-found/no-product-found.component';
import { ConfectionSectionComponent } from './confection-section/confection-section.component';
import { ProgressSpinnerComponent } from 'src/app/shared/components/progress-spinner/progress-spinner.component';
import { ScrollSidebarComponent } from 'src/app/shared/components/scroll-sidebar/scroll-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfectionCatalogComponent,
    ConfectionSectionComponent,
    ConfectionCardComponent,
    ConfectionDetailComponent,
    CreateConfectionComponent,
    OrderConfectionComponent,
    FilterConfectionsPipe,
    PopupComponent,
    ProgressSpinnerComponent,
    NoProductFoundComponent,
    ScrollSidebarComponent
  ],
  exports : [
    ConfectionCatalogComponent, 
    ConfectionDetailComponent,
    ConfectionSectionComponent
  ]
})
export class ConfectionsModule { }
