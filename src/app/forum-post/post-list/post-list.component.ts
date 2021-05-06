import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeadingCreateModule } from 'src/app/heading-create/heading-create.module';
import { Heading } from 'src/app/model/forum/heading';
import { Post } from 'src/app/model/forum/post';
import { PostDeleteComponent } from 'src/app/post-delete/post-delete/post-delete.component';
import { ForumHelperService } from 'src/app/services/forum/forum-helper.service';
import { HeadingService } from 'src/app/services/forum/heading.service';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  heading : any = {} as Heading;
  id : any = 0
 
  constructor(private postService: PostService, protected modalService: NgbModal,
    private activateRoute: ActivatedRoute, private headingService : HeadingService) {
      
  }

  ngOnInit() {
    //this.heading = await this.forumHelperService.getHeadingById(this.heading, this.activateRoute)
    this.activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params => {
        this.populatePost(params.id);
      })
    });
  }


  populatePost(id : number) {
   // this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.postService.getAllPostByHeading(id).subscribe((res: any) => {
      this.posts = res.body;
    })
  }

  deletePost(post : Post) {
    let modalRef = this.modalService.open(PostDeleteComponent);
    modalRef.componentInstance.post = post;
    modalRef.result.then((confirm) => {
      this.populatePost(post.id);
    }, (close) => {

    });
  }
}
