import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiesModule } from './components/pies/pies.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './core/home/home.module';
import { HttpClientModule } from '@angular/common/http';

import { NavigationModule } from './core/navigation/navigation.module';
import { HeaderComponent } from './core/header/header.component';
import { HeaderToolbarComponent } from './core/header/header-toolbar/header-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    NavigationModule,
    PiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
