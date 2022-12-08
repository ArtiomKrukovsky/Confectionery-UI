import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfectionCatalogComponent } from './components/confections/confection-catalog/confection-catalog.component';
import { ConfectionDetailComponent } from './components/confections/confection-detail/confection-detail.component';

const routes: Routes = [
  { path: '', component: ConfectionCatalogComponent },
  { path: 'cakes', component: ConfectionCatalogComponent },
  { path: 'cakes/:id', component: ConfectionDetailComponent },
  { path: 'orders', component: ConfectionCatalogComponent },
  { path: 'desserts', component: ConfectionCatalogComponent },
  { path: 'desserts/:id', component: ConfectionDetailComponent },
  { path: 'tartelettes', component: ConfectionCatalogComponent },
  { path: 'tartelettes/:id', component: ConfectionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
