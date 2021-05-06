import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string;

  constructor(private http : HttpClient) { 
    this.baseUrl =  'http://localhost:3000/user/';
  }

  getAll() {
    return this.http.get<User[]>(this.baseUrl , {observe : "response"});
  }

  getById(id : number){
    return this.http.get<User>(this.baseUrl + id);
  }

  create(user: User){
    return this.http.post(this.baseUrl, user);
  }

  update(user: User){
    return this.http.put(this.baseUrl + user.id, user);
  }

  delete(user : User){
    return this.http.delete(this.baseUrl + user.id);
  }

}
