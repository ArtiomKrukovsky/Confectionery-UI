import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSidebarComponent } from './scroll-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollSidebarComponent],
  exports:[ScrollSidebarComponent]
})
export class ScrollSidebarModule { }
