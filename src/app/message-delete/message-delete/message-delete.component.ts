import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/model/forum/message';
import { MessageService } from 'src/app/services/forum/message.service';

@Component({
  selector: 'app-message-delete',
  templateUrl: './message-delete.component.html',
  styleUrls: ['./message-delete.component.css']
})
export class MessageDeleteComponent implements OnInit {

  @Input() message : any = {} as Message

  constructor(private messageService : MessageService, private modale: NgbActiveModal, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss()
  }

  deleteMessage(message : Message) {
    this.messageService.delete(message).subscribe(res =>{
    })
    this.toastr.success("La supréssion de votre message s'est bien déroulé", "Suppréssion validé");
    this.modale.close()
  }

}
