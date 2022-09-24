import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiesModule } from './components/pies/pies.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './core/home/home.module';
import { HttpClientModule } from '@angular/common/http';

import { NavigationModule } from './core/navigation/navigation.module';
import { HeaderModule } from './core/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    HeaderModule,
    NavigationModule,
    PiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
