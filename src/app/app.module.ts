import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ForumModule } from './forum/forum.module';
import { HeadingCreateModule } from './heading-create/heading-create.module';
import { HttpClientModule } from '@angular/common/http';
import { HeadingEditModule } from './heading-edit/heading-edit.module';
import { ForumPostModule } from './forum-post/forum-post.module';
import { PostCreateModule } from './post-create/post-create.module';
import { PostEditModule } from './post-edit/post-edit.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    HomeModule,
    ForumModule,
    HeadingCreateModule,
    HeadingEditModule,
    ForumPostModule,
    PostCreateModule,
    PostEditModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
