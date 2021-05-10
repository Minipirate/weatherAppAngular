import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isActive: any = "";
  isUserLoggedIn: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    

  }

  Activate(active: string) {
    this.isActive = active
  }

  readLocalStorage(token: string) {
    let value = localStorage.getItem(token);
    if (value == undefined) {
      value == "";
    }
    return value;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['connection'])
  }




}
