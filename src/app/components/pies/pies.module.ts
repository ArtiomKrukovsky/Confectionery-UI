import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieListComponent } from './pie-list/pie-list.component';
import { PieDetailsComponent } from './pie-details/pie-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PieListComponent,
    PieDetailsComponent
  ]
})
export class PiesModule { }
