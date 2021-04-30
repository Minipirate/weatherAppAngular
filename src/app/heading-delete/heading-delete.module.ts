import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingDeleteComponent } from './heading-delete/heading-delete.component';



@NgModule({
  declarations: [
    HeadingDeleteComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeadingDeleteComponent
  ]
})
export class HeadingDeleteModule { }
