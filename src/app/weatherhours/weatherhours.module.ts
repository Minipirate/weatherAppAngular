import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherhoursComponent } from './weatherhours/weatherhours.component';
import { WeatherhoursSelectbarComponent } from './weatherhours-selectbar/weatherhours-selectbar.component';
import { WeatherhoursHoursComponent } from './weatherhours-hours/weatherhours-hours.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    WeatherhoursComponent,
    WeatherhoursSelectbarComponent,
    WeatherhoursHoursComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports : [
    WeatherhoursComponent,
    WeatherhoursSelectbarComponent,
    WeatherhoursHoursComponent
  ],
  bootstrap : [AppComponent]
})
export class WeatherhoursModule { }
