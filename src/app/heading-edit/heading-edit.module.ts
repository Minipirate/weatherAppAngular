import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingEditComponent } from './heading-edit/heading-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeadingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeadingEditComponent
  ]
})
export class HeadingEditModule { }
