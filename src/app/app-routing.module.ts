import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { QualityAirAtHomeComponent } from './quality-air-at-home/quality-air-at-home/quality-air-at-home.component';
import { WeatherTodayComponent } from './weather-today/weather-today/weather-today.component';
import { ForumComponent } from './forum/forum/forum.component';
import { HeadingCreateComponent } from './heading-create/heading-create/heading-create.component';
import { HeadingEditComponent } from './heading-edit/heading-edit/heading-edit.component';
import { WeatherTomorrowComponent } from './weather-tomorrow/weather-tomorrow/weather-tomorrow.component';
import { WeatherWeekendComponent } from './weather-weekend/weather-weekend/weather-weekend.component';
import { WeatherhoursComponent } from './weatherhours/weatherhours/weatherhours.component';


const routes: Routes = [
  // ----- HOME -----
  { path: 'home', component: HomeComponent },
  // ----- FORUM ----- 
  { path: 'forum', component: ForumComponent },
  { path: 'forum/heading/add', component: HeadingCreateComponent },
  { path: 'forum/heading/edit/:id', component: HeadingEditComponent },

  // ----- QUALITYAIRATHOME ----
  { path: 'qualityairathome', component: QualityAirAtHomeComponent },

  // ----- WEATHERTODAY ---- 
  { path: 'weathertoday', component: WeatherTodayComponent },

  // ----- WEATHERTOMORROW ----
  { path: 'weathertomorrow', component: WeatherTomorrowComponent },

  // ----- WEATHERWEEKEND ----
  { path : 'weatherweekend', component: WeatherWeekendComponent },

  // ----- WEATHERHOURS ----
  { path : 'weatherhours', component : WeatherhoursComponent },

      // -----REDIRECTION-----
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
