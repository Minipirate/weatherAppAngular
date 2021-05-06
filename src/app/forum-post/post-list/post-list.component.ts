import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Heading } from 'src/app/model/forum/heading';
import { Message } from 'src/app/model/forum/message';
import { Post } from 'src/app/model/forum/post';
import { PostDeleteComponent } from 'src/app/post-delete/post-delete/post-delete.component';
import { HeadingService } from 'src/app/services/forum/heading.service';
import { MessageService } from 'src/app/services/forum/message.service';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  messages : Message[] = [];
  nbMessage : any;
  heading : any = {} as Heading;
  id : number = 0
 
  constructor(private postService: PostService, protected modalService: NgbModal,
    private activateRoute: ActivatedRoute, private headingService : HeadingService) {
      
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params => {
        this.id = params.id
        this.populatePost(params.id);
      })
    });

  }
   

  populatePost(id : number) {
    this.postService.getAllPostByHeading(id).subscribe((res: any) => {
      this.posts = res.body;
    })
  }

  deletePost(post : Post) {
    let modalRef = this.modalService.open(PostDeleteComponent);
    modalRef.componentInstance.post = post;
    modalRef.result.then((confirm) => {
      this.populatePost(this.id);
    }, (close) => {

    });
  }
}
