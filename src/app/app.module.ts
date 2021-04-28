import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeQualityAirModule } from './home-quality-air/home-quality-air.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeQualityAirModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
