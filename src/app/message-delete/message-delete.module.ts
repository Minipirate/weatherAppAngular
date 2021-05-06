import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDeleteComponent } from './message-delete/message-delete.component';



@NgModule({
  declarations: [
    MessageDeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageDeleteComponent
  ]
})
export class MessageDeleteModule { }
