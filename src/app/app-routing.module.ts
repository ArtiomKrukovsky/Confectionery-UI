import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ConfectionCatalogComponent } from './components/confections/confection-catalog/confection-catalog.component';
import { ConfectionDetailComponent } from './components/confections/confection-detail/confection-detail.component';

const routes: Routes = [
  { path: 'catalog', component: ConfectionCatalogComponent },
  { path: 'orders', component: ConfectionCatalogComponent },
  { path: 'cakes/:id', component: ConfectionDetailComponent },
  { path: 'desserts/:id', component: ConfectionDetailComponent },
  { path: 'tartelettes/:id', component: ConfectionDetailComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollOffset: [0, 70]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
