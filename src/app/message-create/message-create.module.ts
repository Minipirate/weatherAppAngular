import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageCreateComponent } from './message-create/message-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MessageCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MessageCreateComponent
  ]
})
export class MessageCreateModule { }
