import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuComponent } from './tab-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabMenuComponent],
  exports: [TabMenuComponent]
})
export class TabMenuModule { }
