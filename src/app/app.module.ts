import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfectionsModule } from './components/confections/confections.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './core/home/home.module';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { NavigationModule } from './core/navigation/navigation.module';
import { HeaderModule } from './core/header/header.module';
import { FooterModule } from './core/footer/footer.module';

import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

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
    FooterModule,
    ConfectionsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 70]);
    router.events
      .pipe(
        filter((event): event is Scroll => event instanceof Scroll)
      )
      .subscribe((e: Scroll) => {
        if (e.anchor) {
          // anchor navigation
          setTimeout(() => {
            viewportScroller.scrollToAnchor(e.anchor as string);
          })
        } else if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
