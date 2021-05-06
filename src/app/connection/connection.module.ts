import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionComponent } from './connection/connection.component';



@NgModule({
  declarations: [
    ConnectionComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ConnectionComponent
  ]
})
export class ConnectionModule { }
