import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PieListComponent } from './pie-list/pie-list.component';
import { PieDetailsComponent } from './pie-details/pie-details.component';
import { FilterPiesPipe } from 'src/app/pipes/filter-pies.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { CreatePieComponent } from './create-pie/create-pie.component';
import { PieViewComponent } from './pie-view/pie-view.component';
import { OrderPieComponent } from './order-pie/order-pie.component';
import { ProgressSpinnerComponent } from 'src/app/shared/progress-spinner/progress-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [
    PieListComponent,
    PieDetailsComponent,
    FilterPiesPipe,
    CreatePieComponent,
    OrderPieComponent,
    PopupComponent,
    ProgressSpinnerComponent,
    PieViewComponent
  ],
  exports : [
    PieListComponent, 
    PieViewComponent
  ]
})
export class PiesModule { }
