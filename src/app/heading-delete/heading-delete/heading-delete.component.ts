import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heading-delete',
  templateUrl: './heading-delete.component.html',
  styleUrls: ['./heading-delete.component.css']
})
export class HeadingDeleteComponent implements OnInit {

  constructor(private modale: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss()
  }

  deleteHeading() {
    this.toastr.success("La supréssion de votre rubrique s'est bien déroulé", "Suppréssion validé");
    this.modale.dismiss()
  }
}
