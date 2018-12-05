import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Role } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS_URL='http://localhost:8080/users/';

  USER_ROLE_URL = 'http://localhost:8080/roles/';

  constructor(private httpClient : HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.httpClient.get<User[]>(this.USERS_URL);
    
  }
  
  getUser(id:number) : Observable<User> {
    return this.httpClient.get<User>(this.USERS_URL+id);
  }

  addNew( user: User ) : Observable<User> {
    return this.httpClient.post<User>(this.USERS_URL, user);
  }

  delete(id : number) {
    this.httpClient.delete(this.USERS_URL+id).subscribe(
     response => {
       console.log("delete ok", response);
     }
    )
  } 

  update( user : User ) : Observable<User> {
    console.log("Puttin : ", this.USERS_URL + user.id)
    return this.httpClient.put<User>(this.USERS_URL + user.id, user );
  }

  getUserRole() : Observable<Role[]> {
    console.log('getUserRoles() called')
    return this.httpClient.get<Role[]>(this.USER_ROLE_URL);
  }
  
 }