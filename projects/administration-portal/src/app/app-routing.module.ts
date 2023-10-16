import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/authorized.guard';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  { 
    path: 'orders',
    loadChildren: () => import('./components/orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'confections',
    loadChildren: () => import('./components/confections/confections.module').then((m) => m.ConfectionsModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
