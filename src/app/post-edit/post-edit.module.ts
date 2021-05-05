import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PostEditComponent
  ]
})
export class PostEditModule { }
