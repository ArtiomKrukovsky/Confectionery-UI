import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfectionListComponent } from './components/confections/confection-list/confection-list.component';
import { ConfectionViewComponent } from './components/confections/confection-view/confection-view.component';

const routes: Routes = [
  { path: '', component: ConfectionListComponent },
  { path: 'cakes', component: ConfectionListComponent },
  { path: 'orders', component: ConfectionListComponent },
  { path: 'cakes/:id', component: ConfectionViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
