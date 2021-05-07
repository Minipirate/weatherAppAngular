import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionComponent } from './connection/connection.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    ConnectionComponent
  ]
})
export class ConnectionModule { }
