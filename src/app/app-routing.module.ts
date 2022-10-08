import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PieListComponent } from './components/pies/pie-list/pie-list.component';
import { PieViewComponent } from './components/pies/pie-view/pie-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pies', component: PieListComponent },
  { path: 'orders', component: PieListComponent },
  { path: 'pies/:id', component: PieViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
