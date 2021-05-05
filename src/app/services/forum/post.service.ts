import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heading } from 'src/app/model/forum/heading';
import { Post } from 'src/app/model/forum/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl : string;

  constructor(private http : HttpClient) {
    this.baseUrl =  'http://localhost:3000/post/';
   }

  getAllPostByHeading(id : number) {
    console.log(id);
    
    return this.http.get<Post[]>(this.baseUrl + "?heading.id=" + id, {observe : "response"});
  }

  getById(id : number){
    return this.http.get<Post>(this.baseUrl + id);
  }

  create(heading: Post){
    return this.http.post(this.baseUrl, heading);
  }

  update(heading: Post){
    return this.http.put(this.baseUrl + heading.id, heading);
  }

  delete(heading : Post){
    return this.http.delete(this.baseUrl + heading.id);
  }

}
