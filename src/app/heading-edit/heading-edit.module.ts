import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingEditComponent } from './heading-edit/heading-edit.component';



@NgModule({
  declarations: [
    HeadingEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadingEditComponent
  ]
})
export class HeadingEditModule { }
