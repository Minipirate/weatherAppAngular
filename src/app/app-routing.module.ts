import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { QualityAirAtHomeComponent } from './quality-air-at-home/quality-air-at-home/quality-air-at-home.component';
import { WeatherTodayComponent } from './weather-today/weather-today/weather-today.component';
import { ForumComponent } from './forum/forum/forum.component';
import { HeadingCreateComponent } from './heading-create/heading-create/heading-create.component';
import { HeadingEditComponent } from './heading-edit/heading-edit/heading-edit.component';
import { ForumPostComponent } from './forum-post/forum-post/forum-post.component';
import { PostCreateComponent } from './post-create/post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit/post-edit.component';
import { ForumMessageComponent } from './forum-message/forum-message/forum-message.component';
import { MessageCreateComponent } from './message-create/message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit/message-edit.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { ConnectionComponent } from './connection/connection/connection.component';
import { WeatherTomorrowComponent } from './weather-tomorrow/weather-tomorrow/weather-tomorrow.component';
import { WeatherWeekendComponent } from './weather-weekend/weather-weekend/weather-weekend.component';
import { WeatherhoursComponent } from './weatherhours/weatherhours/weatherhours.component';
import { WeatherregionComponent } from './weatherregion/weatherregion/weatherregion.component';

const routes: Routes = [
  // ----- HOME -----
  { path: 'home', component: HomeComponent },
  // ----- FORUM -----
  { path: 'forum', component: ForumComponent },
  { path: 'forum/heading/add', component: HeadingCreateComponent },
  { path: 'forum/heading/edit/:id', component: HeadingEditComponent },
  { path: 'forum/post/:id', component: ForumPostComponent },
  { path: 'forum/post/:id/add', component: PostCreateComponent },
  { path: 'forum/post/edit/:id', component: PostEditComponent },
  { path: 'forum/message/:id', component: ForumMessageComponent },
  { path: 'forum/message/:id/add', component: MessageCreateComponent },
  { path: 'forum/message/edit/:id', component: MessageEditComponent },
  // ----- LOGIN / REGISTRATION -----
  { path: 'registration', component: RegistrationComponent },
  // ----- CONNEXION -----
  { path: 'connection', component: ConnectionComponent },
  // ----- QUALITYAIRATHOME ----
  { path: 'qualityairathome', component: QualityAirAtHomeComponent },

  // ----- WEATHERTODAY ---- 
  { path: 'weathertoday', component: WeatherTodayComponent },
  // ----- WEATHERTOMORROW ----
  { path: 'weathertomorrow', component: WeatherTomorrowComponent },

  // ----- WEATHERWEEKEND ----
  { path: 'weatherweekend', component: WeatherWeekendComponent },
  // ----- WEATHERHOURS ----
  { path: 'weatherhours', component: WeatherhoursComponent },

  // ----- WEATHERREGION ----
  { path: 'weatherregion', component: WeatherregionComponent },

  // -----REDIRECTION-----
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
