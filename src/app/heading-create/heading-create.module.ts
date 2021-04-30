import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingCreateComponent } from './heading-create/heading-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeadingCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeadingCreateComponent
  ]
})
export class HeadingCreateModule { }
