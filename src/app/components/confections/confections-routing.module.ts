import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfectionCatalogComponent } from './confection-catalog/confection-catalog.component';
import { ConfectionMappingsResolver } from './resolvers/confection-mappings.resolver';

const routes: Routes = [
  { 
    path: '', 
    component: ConfectionCatalogComponent, 
    resolve: {
      confectionMappings: ConfectionMappingsResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ConfectionMappingsResolver]
})
export class ConfectionsRoutingModule { }
