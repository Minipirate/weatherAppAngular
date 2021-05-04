import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { QualityAirAtHomeModule } from './quality-air-at-home/quality-air-at-home.module';
import { WeatherTodayModule } from './weather-today/weather-today.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HomeModule,
    QualityAirAtHomeModule,
    WeatherTodayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
