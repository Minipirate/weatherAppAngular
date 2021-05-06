import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { HeadinglistComponent } from './headinglist/headinglist.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ForumComponent,
    HeadinglistComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [
    ForumComponent,
    HeadinglistComponent
  ]
})
export class ForumModule { }
