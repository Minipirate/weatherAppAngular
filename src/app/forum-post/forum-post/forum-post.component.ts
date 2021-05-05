import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heading } from 'src/app/model/forum/heading';
import { ForumHelperService } from 'src/app/services/forum/forum-helper.service';
import { HeadingService } from 'src/app/services/forum/heading.service';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {

  heading : any = {} as Heading;

  constructor(private forumHelper : ForumHelperService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.heading = this.forumHelper.getHeadingById(this.heading, this.activateRoute)

  }

  
}
