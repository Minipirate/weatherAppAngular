import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/forum/post';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.css']
})
export class ForumMessageComponent implements OnInit {

  post: any = {} as Post;

  constructor(private activateRoute: ActivatedRoute, private postServic: PostService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(res => {
      this.postServic.getById(res.id).subscribe(params => {
        console.log(params);
        this.post = params
      })
    })
  }

}
