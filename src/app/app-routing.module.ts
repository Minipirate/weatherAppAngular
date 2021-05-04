import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { QualityAirAtHomeComponent } from './quality-air-at-home/quality-air-at-home/quality-air-at-home.component';
import { WeatherTodayComponent } from './weather-today/weather-today/weather-today.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'qualityairathome', component: QualityAirAtHomeComponent },
  { path : 'weathertoday', component: WeatherTodayComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
