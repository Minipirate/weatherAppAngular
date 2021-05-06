import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageDeleteComponent } from 'src/app/message-delete/message-delete/message-delete.component';
import { Message } from 'src/app/model/forum/message';
import { Post } from 'src/app/model/forum/post';
import { MessageService } from 'src/app/services/forum/message.service';
import { PostService } from 'src/app/services/forum/post.service';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages : Message[] = [];
  post : any = {} as Post;
  id : any

  constructor(private postService: PostService, protected modalService: NgbModal,
    private activateRoute: ActivatedRoute, private messageService : MessageService) {
      
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(res => {
      this.postService.getById(res.id).subscribe(params => {
        this.id= params.id
        this.populateMessage(params.id);
      })
    });
  }


  populateMessage(id : number) {
   // this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.messageService.getAllMessageByPost(id).subscribe((res: any) => {
      this.messages = res.body;
    })
  }

  deleteMessage(message : Message) {
    let modalRef = this.modalService.open(MessageDeleteComponent);
    modalRef.componentInstance.message = message;
    modalRef.result.then((confirm) => {
      this.populateMessage(this.id);
    }, (close) => {

    });
  }
}
