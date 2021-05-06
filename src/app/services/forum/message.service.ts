import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/app/model/forum/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl : string;

  constructor(private http : HttpClient) {
    this.baseUrl =  'http://localhost:3000/message/';
   }

  getAllMessageByPost(id : number) {
    return this.http.get<Message[]>(this.baseUrl + "?post.id=" + id, {observe : "response"});
  }

  getById(id : number){
    return this.http.get<Message>(this.baseUrl + id);
  }

  create(message: Message){
    return this.http.post(this.baseUrl, message);
  }

  update(message: Message){
    return this.http.put(this.baseUrl + message.id, message);
  }

  delete(message : Message){
    return this.http.delete(this.baseUrl + message.id);
  }

}