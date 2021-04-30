import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeadingDeleteComponent } from 'src/app/heading-delete/heading-delete/heading-delete.component';

@Component({
  selector: 'app-headinglist',
  templateUrl: './headinglist.component.html',
  styleUrls: ['./headinglist.component.css']
})
export class HeadinglistComponent implements OnInit {

  constructor(protected modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deleteHeading(){
    let modalRef = this.modalService.open(HeadingDeleteComponent);
  }

}
