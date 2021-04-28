import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWeatherComponent } from './card-weather/card-weather.component';
import { IndicatorWeatherComponent } from './indicator-weather/indicator-weather.component';
import { IndicatorListWeatherComponent } from './indicator-list-weather/indicator-list-weather.component';



@NgModule({
  declarations: [
    CardWeatherComponent,
    IndicatorWeatherComponent,
    IndicatorListWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardWeatherComponent,
    IndicatorListWeatherComponent,
    IndicatorWeatherComponent
  ]
})
export class WeatherModule { }
