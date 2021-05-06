import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/model/forum/post';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  @Input() post : any = {} as Post


  constructor(private postService : PostService, private modale: NgbActiveModal, private toastr: ToastrService,private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss()
  }

  deletePost(post : Post) {
    this.postService.delete(post).subscribe(res =>{
    })
    this.toastr.success("La supréssion de votre rubrique s'est bien déroulé", "Suppréssion validé");
    this.modale.close()
  }

}
