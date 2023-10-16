import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfectionListComponent } from './confection-list/confection-list.component';
import { AuthGuard } from '../../core/guards/authorized.guard';

const routes: Routes = [
  { path: '', component: ConfectionListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfectionsRoutingModule { }
