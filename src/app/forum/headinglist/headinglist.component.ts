import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeadingDeleteComponent } from 'src/app/heading-delete/heading-delete/heading-delete.component';
import { Heading } from 'src/app/model/forum/heading';
import { HeadingService } from 'src/app/services/forum/heading.service';

@Component({
  selector: 'app-headinglist',
  templateUrl: './headinglist.component.html',
  styleUrls: ['./headinglist.component.css']
})
export class HeadinglistComponent implements OnInit {

  headings: Heading[] = [];

  constructor(private headingService: HeadingService, protected modalService: NgbModal) { }

  ngOnInit(): void {
    this.populateHeading();
  }

  populateHeading() {
    this.headingService.getAll().subscribe((res : any) => {
      this.headings = res.body;
    })
  }

  deleteHeading(heading: Heading) {
    let modalRef = this.modalService.open(HeadingDeleteComponent);
    modalRef.componentInstance.heading = heading;
    modalRef.result.then((confirm) => {
      this.populateHeading();
    }, (close) => {

    });
  }
}
