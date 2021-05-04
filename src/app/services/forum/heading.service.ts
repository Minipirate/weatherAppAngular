import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heading } from 'src/app/model/forum/heading';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {

  baseUrl : string;

  constructor(private http : HttpClient) { 
    this.baseUrl =  'http://localhost:3000/heading/';
  }

  getAll() {
    return this.http.get<Heading[]>(this.baseUrl , {observe : "response"});
  }

  getById(id : number){
    return this.http.get<Heading>(this.baseUrl + id);
  }

  create(heading: Heading){
    return this.http.post(this.baseUrl, heading);
  }

  update(heading: Heading){
    return this.http.put(this.baseUrl + heading.id, heading);
  }

  delete(heading : Heading){
    return this.http.delete(this.baseUrl + heading.id);
  }

}
