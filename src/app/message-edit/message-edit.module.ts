import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MessageEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MessageEditComponent
  ]
})
export class MessageEditModule { }
