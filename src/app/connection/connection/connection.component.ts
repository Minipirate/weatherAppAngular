import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectionService } from 'src/app/services/authentification/connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  email: string = "";
  emailValidator: boolean = true;

  constructor(private connectionService: ConnectionService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.emailValidator = true;
    this.connectionService.findByEmail(this.email).subscribe(res => {
      if (res.length) {
        localStorage.setItem("token", res[0].email);
        this.toastr.success("Vous allez être rediriger dans quelque seconde", "Vous êtes connecté " +res[0].firstname)
        setTimeout(() => { this.router.navigate(['users']); }, 3000);
      }
      else {
        this.toastr.error("Votre email ou votre mot de passe sont incorrectes", "Login invalide")
        this.emailValidator = false
      }
    });
  }

}
