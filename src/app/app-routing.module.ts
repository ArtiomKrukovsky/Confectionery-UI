import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PieListComponent } from './components/pies/pie-list/pie-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pies', component: PieListComponent },
  { path: 'orders', component: PieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
