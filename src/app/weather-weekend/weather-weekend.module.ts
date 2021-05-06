import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWeekendComponent } from './weather-weekend/weather-weekend.component';
import { WeatherWeekendSelectbarComponent } from './weather-weekend-selectbar/weather-weekend-selectbar.component';
import { WeatherWeekendMorningnightComponent } from './weather-weekend-morningnight/weather-weekend-morningnight.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    WeatherWeekendComponent,
    WeatherWeekendSelectbarComponent,
    WeatherWeekendMorningnightComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ], 
  exports: [
    WeatherWeekendComponent,
    WeatherWeekendSelectbarComponent,
    WeatherWeekendMorningnightComponent
  ],
  bootstrap: [AppComponent]
})
export class WeatherWeekendModule { }
