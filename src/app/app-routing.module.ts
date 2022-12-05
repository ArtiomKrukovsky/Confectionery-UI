import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfectionCatalogComponent } from './components/confections/confection-catalog/confection-catalog.component';
import { ConfectionSectionComponent } from './components/confections/confection-section/confection-section.component';
import { ConfectionDetailComponent } from './components/confections/confection-detail/confection-detail.component';

const routes: Routes = [
  { path: '', component: ConfectionCatalogComponent },
  { path: 'cakes', component: ConfectionCatalogComponent },
  { path: 'orders', component: ConfectionCatalogComponent },
  { path: 'cakes/:id', component: ConfectionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
