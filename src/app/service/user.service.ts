import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { USERS } from '../mock/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService, private http:HttpClient) { }
  private url: String = "http://localhost:8080/User/1";
  getUser(id: number): Observable<User> {
    this.messageService.add(`UserService: fetched user id=${id}`);
    const url = `${this.url}`;
    return this.http.get<User>(url);
    // return of(USERS.find(user => user.id === id));
  }

}
