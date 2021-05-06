import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumMessageComponent } from './forum-message/forum-message.component';
import { MessageListComponent } from './message-list/message-list.component';



@NgModule({
  declarations: [
    ForumMessageComponent,
    MessageListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ForumMessageModule { }
