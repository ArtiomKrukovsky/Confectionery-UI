import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoProductFoundComponent } from './no-product-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoProductFoundComponent],
  exports: [NoProductFoundComponent]
})
export class NoProductFoundModule { }
