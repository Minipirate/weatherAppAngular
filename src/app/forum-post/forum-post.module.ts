import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ForumPostComponent,
    PostListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ForumPostComponent,
    PostListComponent
  ]
})
export class ForumPostModule { }
