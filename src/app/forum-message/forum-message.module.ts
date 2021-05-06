import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumMessageComponent } from './forum-message/forum-message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ForumMessageComponent,
    MessageListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ForumMessageComponent,
    MessageListComponent
  ]
})
export class ForumMessageModule { }
