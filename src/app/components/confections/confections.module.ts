import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfectionListComponent } from './confection-list/confection-list.component';
import { ConfectionDetailsComponent } from './confection-details/confection-details.component';
import { FilterConfectionsPipe } from 'src/app/pipes/filter-confections.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { CreateConfectionComponent } from './create-confection/create-confection.component';
import { ConfectionViewComponent } from './confection-view/confection-view.component';
import { OrderConfectionComponent } from './order-confection/order-confection.component';
import { ProgressSpinnerComponent } from 'src/app/shared/progress-spinner/progress-spinner.component';
import { NoProductFoundComponent } from 'src/app/shared/no-product-found/no-product-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfectionListComponent,
    ConfectionDetailsComponent,
    FilterConfectionsPipe,
    CreateConfectionComponent,
    OrderConfectionComponent,
    PopupComponent,
    ProgressSpinnerComponent,
    NoProductFoundComponent,
    ConfectionViewComponent
  ],
  exports : [
    ConfectionListComponent, 
    ConfectionViewComponent
  ]
})
export class ConfectionsModule { }
