import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { MyDirective } from './my.directive';
import { Banner2Component } from './banner2/banner2.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MyDirective,
    Banner2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ BannerComponent, Banner2Component ]
})
export class AppModule { }
