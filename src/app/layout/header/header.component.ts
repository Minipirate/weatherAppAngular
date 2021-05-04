import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isActive : any = "";

  constructor() { }

  ngOnInit(): void {
  }

  Activate(active : string){
    this.isActive = active

  }

}
