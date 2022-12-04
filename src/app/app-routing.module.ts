import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfectionCatalogComponent } from './components/confections/confection-catalog/confection-catalog.component';
import { ConfectionSectionComponent } from './components/confections/confection-section/confection-section.component';
import { ConfectionViewComponent } from './components/confections/confection-view/confection-view.component';

const routes: Routes = [
  { path: '', component: ConfectionSectionComponent },
  { path: 'cakes', component: ConfectionSectionComponent },
  { path: 'orders', component: ConfectionSectionComponent },
  { path: 'cakes/:id', component: ConfectionViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
