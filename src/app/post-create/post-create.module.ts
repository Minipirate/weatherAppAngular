import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    PostCreateComponent
  ]
})
export class PostCreateModule { }
