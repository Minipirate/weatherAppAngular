import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTomorrowComponent } from './weather-tomorrow/weather-tomorrow.component';
import { WeatherTomorrowSelectbarComponent } from './weather-tomorrow-selectbar/weather-tomorrow-selectbar.component';
import { WeatherTomorrowMatinmidisoirnuitComponent } from './weather-tomorrow-matinmidisoirnuit/weather-tomorrow-matinmidisoirnuit.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    WeatherTomorrowComponent,
    WeatherTomorrowSelectbarComponent,
    WeatherTomorrowMatinmidisoirnuitComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports : [
    WeatherTomorrowComponent,
    WeatherTomorrowSelectbarComponent,
    WeatherTomorrowMatinmidisoirnuitComponent
  ],
  bootstrap : [AppComponent]
})
export class WeatherTomorrowModule { }
