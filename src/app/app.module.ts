import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { QualityAirAtHomeModule } from './quality-air-at-home/quality-air-at-home.module';
import { WeatherTodayModule } from './weather-today/weather-today.module';
import { ForumModule } from './forum/forum.module';
import { HeadingCreateModule } from './heading-create/heading-create.module';
import { HttpClientModule } from '@angular/common/http';
import { HeadingEditModule } from './heading-edit/heading-edit.module';
import { ForumPostModule } from './forum-post/forum-post.module';
import { PostCreateModule } from './post-create/post-create.module';
import { PostEditModule } from './post-edit/post-edit.module';
import { ForumMessageModule } from './forum-message/forum-message.module';
import { MessageCreateModule } from './message-create/message-create.module';
import { MessageEditModule } from './message-edit/message-edit.module';
import { RegistrationModule } from './registration/registration.module';
import { ConnectionModule } from './connection/connection.module';


@NgModule({
  declarations: [
    AppComponent,
  ], 
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ----- HEADER / FOOTER -----
    LayoutModule,
    // ----- HOME -----
    HomeModule,
    // ----- QUALITYAIRATHOME - WEATHERTODAY ----
    QualityAirAtHomeModule,
    WeatherTodayModule,
     // ----- FORUM -----
    ForumModule,
    ForumPostModule,
    ForumMessageModule,
    HeadingCreateModule,
    HeadingEditModule,
    PostCreateModule,
    PostEditModule,
    MessageCreateModule,
    MessageEditModule,
    // ----- Login / Registration -----
    RegistrationModule,
    // ----- FORUM -----
    ConnectionModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
