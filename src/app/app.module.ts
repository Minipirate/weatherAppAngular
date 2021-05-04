import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { QualityAirAtHomeModule } from './quality-air-at-home/quality-air-at-home.module';
import { WeatherTodayModule } from './weather-today/weather-today.module';
import { ForumModule } from './forum/forum.module';
import { HeadingCreateModule } from './heading-create/heading-create.module';
import { HttpClientModule } from '@angular/common/http';
import { HeadingEditModule } from './heading-edit/heading-edit.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    HomeModule,
    QualityAirAtHomeModule,
    WeatherTodayModule,
    HomeModule,
    ForumModule,
    HeadingCreateModule,
    HeadingEditModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
