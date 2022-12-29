import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfectionCatalogComponent } from './confection-catalog/confection-catalog.component';
import { ConfectionCardComponent } from './confection-card/confection-card.component';
import { FilterConfectionsPipe } from 'src/app/shared/pipes/filter-confections.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CreateConfectionComponent } from './create-confection/create-confection.component';
import { ConfectionDetailComponent } from './confection-detail/confection-detail.component';
import { OrderConfectionComponent } from './order-confection/order-confection.component';
import { ConfectionSectionComponent } from './confection-section/confection-section.component';
import { ScrollSidebarModule } from 'src/app/shared/components/scroll-sidebar/scroll-sidebar.module';
import { ProgressSpinnerModule } from 'src/app/shared/components/progress-spinner/progress-spinner.module';
import { PopupModule } from 'src/app/shared/components/popup/popup.module';
import { NoProductFoundModule } from 'src/app/shared/components/no-product-found/no-product-found.module';
import { BadgeModule } from 'src/app/shared/components/badge/badge.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    PopupModule,
    NoProductFoundModule,
    ScrollSidebarModule,
    ProgressSpinnerModule,
    BadgeModule
  ],
  declarations: [
    ConfectionCatalogComponent,
    ConfectionSectionComponent,
    ConfectionCardComponent,
    ConfectionDetailComponent,
    CreateConfectionComponent,
    OrderConfectionComponent,
    FilterConfectionsPipe
  ],
  exports : [
    ConfectionCatalogComponent, 
    ConfectionDetailComponent,
    ConfectionSectionComponent
  ]
})
export class ConfectionsModule { }
