import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Heading } from 'src/app/model/forum/heading';
import { HeadingService } from 'src/app/services/forum/heading.service';

@Component({
  selector: 'app-heading-edit',
  templateUrl: './heading-edit.component.html',
  styleUrls: ['./heading-edit.component.css']
})
export class HeadingEditComponent implements OnInit {

  heading : any = {} as Heading;
  titleValidator : boolean = true;
  titleLengthValidator: boolean = true;

  constructor(private headingService : HeadingService ,private toastr: ToastrService, private router : Router, private activateRoute : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.getHeadingById()
  }

  // Permet de récupérer le Heading grâce à l'id passé dans l'url
  getHeadingById() {
    this.activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params =>{
        this.heading = params;
      })
    });
  }

  editHeading() {
    this.titleValidator = !this.heading.title ? this.titleValidator = false : this.titleValidator = true;
    this.titleLengthValidator = this.heading.title && this.heading.title.length < 5 ? this.titleLengthValidator = false : this.titleLengthValidator = true;
    if(this.titleValidator && this.titleLengthValidator){
      this.headingService.update(this.heading).subscribe( res => {

      });
      this.toastr.success("Votre rubrique a été modifié, vous allez ensuite être redirigé vers le forum", "Modification validé");
      setTimeout(() => {this.router.navigate(['forum']); }, 3000)
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }
}
