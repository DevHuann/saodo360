import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPanoViewerModule, NgxSpinViewerModule} from "@egjs/ngx-view360";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainLayoutModule} from "./main-layout/main-layout.module";

@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
    NgxPanoViewerModule,
    NgxSpinViewerModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
