import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PieListComponent } from './pie-list/pie-list.component';
import { PieDetailsComponent } from './pie-details/pie-details.component';
import { FilterPiesPipe } from 'src/app/pipes/filter-pies.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ModalFormComponent } from 'src/app/shared/modal-form/modal-form.component';
import { CreatePieComponent } from './create-pie/create-pie.component';

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
    ModalFormComponent
  ],
  exports : [PieListComponent]
})
export class PiesModule { }
