import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { QualityAirAtHomeComponent } from './quality-air-at-home/quality-air-at-home/quality-air-at-home.component';
import { WeatherTodayComponent } from './weather-today/weather-today/weather-today.component';
import { ForumComponent } from './forum/forum/forum.component';
import { HeadingCreateComponent } from './heading-create/heading-create/heading-create.component';
import { HeadingEditComponent } from './heading-edit/heading-edit/heading-edit.component';


const routes: Routes = [
      // ----- HOME -----
  {path: 'home', component: HomeComponent},
      // ----- FORUM ----- 
  {path: 'forum', component: ForumComponent},
  {path: 'forum/heading/add', component: HeadingCreateComponent},
  {path: 'forum/heading/edit/:id', component: HeadingEditComponent},

  // ----- QUALITYAIRATHOME - WEATHERTODAY ----
  { path: 'qualityairathome', component: QualityAirAtHomeComponent },
  { path : 'weathertoday', component: WeatherTodayComponent },

      // -----REDIRECTION-----
  {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
