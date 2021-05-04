import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeadingService } from 'src/app/services/forum/heading.service';

@Component({
  selector: 'app-heading-create',
  templateUrl: './heading-create.component.html',
  styleUrls: ['./heading-create.component.css']
})
export class HeadingCreateComponent implements OnInit {

  constructor(private headingService : HeadingService ,private toastr: ToastrService, private router : Router) { }

  ngOnInit(): void {
  }

  saveHeading(form : NgForm){
    if(form.valid){
      console.log(form.value);
      this.headingService.create(form.value).subscribe( res => {

      });
      this.toastr.success("Votre rubrique va être crée, vous allez ensuite être redirigé vers le forum", "Création valide");
      setTimeout(() => {this.router.navigate(['forum']); }, 3000)
    }
    else {
      this.toastr.error("Vous n'avez pas c  orrectement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }

}
