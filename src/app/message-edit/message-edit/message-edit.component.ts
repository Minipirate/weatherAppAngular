import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/model/forum/message';
import { MessageService } from 'src/app/services/forum/message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {

  message : any = {} as Message;
  contentValidator : boolean = true;

  constructor(private messageService : MessageService ,private toastr: ToastrService, private router : Router, 
    private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getMessageById()
  }

  getMessageById(){
    this.activateRoute.params.subscribe(res => {
      this.messageService.getById(res.id).subscribe(params =>{
        this.message = params;
      })
    })
  }

  editMessage(){
    this.contentValidator = !this.message.content ? this.contentValidator = false : this.contentValidator = true;
    if(this.contentValidator){
      let currentdate = new Date();
      this.message.date = currentdate;
      this.messageService.update(this.message).subscribe( res => {

      });
      this.toastr.success("Votre message a été modifié, vous allez ensuite être redirigé vers le forum", "Modification validé");
      setTimeout(() => {this.router.navigate(['forum']); }, 3000)
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }

}
