import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { CardWeatherComponent } from './weather/card-weather/card-weather.component';
import { IndicatorWeatherComponent } from './weather/indicator-weather/indicator-weather.component';



@NgModule({
  declarations: [
    WeatherComponent,
    CardWeatherComponent,
    IndicatorWeatherComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeWeatherModule { }
