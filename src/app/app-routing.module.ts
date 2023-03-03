import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ConfectionDetailComponent } from './components/confections/confection-detail/confection-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  {
    path: 'catalog',
    loadChildren: () => import('./components/confections/confections.module').then((m) => m.ConfectionsModule)
  },
  { path: 'cakes/:id', component: ConfectionDetailComponent },
  { path: 'desserts/:id', component: ConfectionDetailComponent },
  { path: 'tartelettes/:id', component: ConfectionDetailComponent },
  { path: 'marshmallow/:id', component: ConfectionDetailComponent },
  {
    path: 'info',
    loadChildren: () => import('./components/information/information.module').then((m) => m.InformationModule)
  }
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
