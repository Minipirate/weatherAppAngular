import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/authentification/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService : UserService, private toastr: ToastrService, private router : Router) { }

  ngOnInit(): void {
  }

  saveUser(form : NgForm){
    if(form.valid){
     
      console.log("form", form.value);
      this.userService.create(form.value).subscribe(res => {
        
      });
      this.toastr.success("Vous vous êtes bien enregistré, vous allez être redirigé", "Bonjour "+ form.value.lastname + " "+ form.value.firstname);
      setTimeout(() => {this.router.navigate(['home']);},3000);
    }
    else {
      this.toastr.error("Le formulaire n'est pas correctement remplis", "Erreur")
    }
  }

}
