import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/model/forum/post';
import { MessageService } from 'src/app/services/forum/message.service';
import { PostService } from 'src/app/services/forum/post.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {

  post : any = {} as Post;
  contentValidator: boolean = true;

  constructor(private postService: PostService,private messageService : MessageService ,private toastr: ToastrService, 
    private router: Router,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // on récupère l'id passé en url afin de récupérer l'objet Post associé, 
    this.activateRoute.params.subscribe(res => {
      this.postService.getById(res.id).subscribe(params => {
        console.log(params);
        this.post = params
      })
    });
  }

  saveMessage(form : NgForm){
    if (form.valid) {
      console.log(form.value);
      let currentdate = new Date();
      form.value.date = currentdate;
      form.value.post = this.post
      this.messageService.create(form.value).subscribe(res => {
      });
      this.toastr.success("Votre message a été crée, vous allez ensuite être redirigé vers le forum", "Message valide");
      this.router.navigate(['forum']);
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }

}
