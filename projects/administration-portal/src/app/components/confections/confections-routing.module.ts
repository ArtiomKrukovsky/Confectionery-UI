import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfectionListComponent } from './confection-list/confection-list.component';

const routes: Routes = [
  { path: '', component: ConfectionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfectionsRoutingModule { }
