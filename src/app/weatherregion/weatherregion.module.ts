import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherregionComponent } from './weatherregion/weatherregion.component';
import { WeatherregionSelectbarComponent } from './weatherregion-selectbar/weatherregion-selectbar.component';
import { WeatherregionMapComponent } from './weatherregion-map/weatherregion-map.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    WeatherregionComponent,
    WeatherregionSelectbarComponent,
    WeatherregionMapComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    WeatherregionComponent,
    WeatherregionSelectbarComponent,
    WeatherregionMapComponent
  ],
  bootstrap: [AppComponent]
})
export class WeatherregionModule { }
