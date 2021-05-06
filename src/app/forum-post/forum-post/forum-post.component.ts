import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heading } from 'src/app/model/forum/heading';
import { HeadingService } from 'src/app/services/forum/heading.service';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {

  heading: any = {} as Heading;

  constructor(private activateRoute: ActivatedRoute, private headingService: HeadingService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params => {
        console.log(params);
        this.heading = params
      })
    })
  }
}
