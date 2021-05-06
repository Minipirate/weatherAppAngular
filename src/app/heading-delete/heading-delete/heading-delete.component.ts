import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Heading } from 'src/app/model/forum/heading';
import { HeadingService } from 'src/app/services/forum/heading.service';

@Component({
  selector: 'app-heading-delete',
  templateUrl: './heading-delete.component.html',
  styleUrls: ['./heading-delete.component.css']
})
export class HeadingDeleteComponent implements OnInit {
  @Input() heading : any = {} as Heading

  constructor(private headingService : HeadingService,private modale: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss()
  }

  deleteHeading(heading : Heading) {
    this.headingService.delete(heading).subscribe(res =>{
    })
    this.toastr.success("La supréssion de votre rubrique s'est bien déroulé", "Suppréssion validé");
    this.modale.close()
  }
}
