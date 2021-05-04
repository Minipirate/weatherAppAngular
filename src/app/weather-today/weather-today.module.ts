import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherTodaySelectbarComponent } from './weather-today-selectbar/weather-today-selectbar.component';
import { WeatherTodayMatinmidisoirnuitComponent } from './weather-today-matinmidisoirnuit/weather-today-matinmidisoirnuit.component';


@NgModule({
  declarations: [
    WeatherTodayComponent,
    WeatherTodaySelectbarComponent,
    WeatherTodayMatinmidisoirnuitComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ], 
  exports: [
    WeatherTodayComponent,
    WeatherTodaySelectbarComponent,
    WeatherTodayMatinmidisoirnuitComponent
  ],
  bootstrap: [AppComponent]
})
export class WeatherTodayModule { }
