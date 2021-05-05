import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heading } from 'src/app/model/forum/heading';
import { HeadingService } from './heading.service';

@Injectable({
  providedIn: 'root'
})
export class ForumHelperService {

  constructor(private headingService: HeadingService) { }


  getHeadingById(heading: Heading, activateRoute: ActivatedRoute) {
     activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params => {
        heading.id = params.id;
        heading.title = params.title;
      })
    });
    return heading
  }

  activateRouteId(id : number ,activateRoute: ActivatedRoute){
    activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params => {
        id = params.id;
      })
    });
    return id;
  }
}
