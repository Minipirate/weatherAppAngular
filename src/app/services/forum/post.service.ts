import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.get<Post[]>(this.baseUrl + "?heading.id=" + id, {observe : "response"});
  }

  getById(id : number){
    return this.http.get<Post>(this.baseUrl + id);
  }

  create(post: Post){
    return this.http.post(this.baseUrl, post);
  }

  update(post: Post){
    return this.http.put(this.baseUrl + post.id, post);
  }

  delete(post : Post){
    return this.http.delete(this.baseUrl + post.id);
  }

}
