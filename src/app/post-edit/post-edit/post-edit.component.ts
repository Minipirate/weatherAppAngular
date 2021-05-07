import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/model/forum/post';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post : any = {} as Post;
  titleValidator : boolean = true;
  titleLengthValidator: boolean = true;

  constructor(private postService : PostService ,private toastr: ToastrService, private router : Router, 
    private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getPostById()
  }

  getPostById(){
    this.activateRoute.params.subscribe(res => {
      this.postService.getById(res.id).subscribe(params =>{
        this.post = params;
      })
    })
  }

  editPost(){
    this.titleValidator = !this.post.title ? this.titleValidator = false : this.titleValidator = true;
    this.titleLengthValidator = this.post.title && this.post.title.length < 5 ? this.titleLengthValidator = false : this.titleLengthValidator = true;
    if(this.titleValidator && this.titleLengthValidator){
      this.postService.update(this.post).subscribe( res => {

      });
      this.toastr.success("Votre post a été modifié, vous allez ensuite être redirigé vers le forum", "Modification validé");
      setTimeout(() => {this.router.navigate(['forum']); }, 3000)
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }
}
