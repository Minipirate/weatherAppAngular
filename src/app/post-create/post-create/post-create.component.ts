import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Heading } from 'src/app/model/forum/heading';
import { HeadingService } from 'src/app/services/forum/heading.service';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  heading: any = {} as Heading;
  titleValidator: boolean = true;

  constructor(private postService: PostService, private toastr: ToastrService, private router: Router,
    private activateRoute: ActivatedRoute, private headingService: HeadingService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params => {
        console.log(params);
        this.heading = params
      })
    });
  }

  savePost(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      form.value.heading = this.heading
      this.postService.create(form.value).subscribe(res => {
      });
      this.toastr.success("Votre post va être crée, vous allez ensuite être redirigé vers le forum", "Création valide");
      setTimeout(() => { this.router.navigate(['forum']); }, 3000)
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }
}
