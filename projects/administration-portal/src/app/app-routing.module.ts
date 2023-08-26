import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  { 
    path: 'orders',
    loadChildren: () => import('./components/orders/orders.module').then((m) => m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
