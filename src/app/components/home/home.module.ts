import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule 
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
