import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppComponent } from '../app.component';
import { WeatherModule } from './weather/weather.module';
import { QualityAirModule } from './quality-air/quality-air.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    WeatherModule,
    QualityAirModule
  ],
  exports: [
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class HomeModule { }
