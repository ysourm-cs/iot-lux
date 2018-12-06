import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  @Output() userLoggedIn = new EventEmitter();
  user : User;

  authToken : string;

  constructor() { }

  getUser() : User {
    return this.user;
  }

  setUser(user : User) {
    this.user = user;
    this.userLoggedIn.emit(this.user);
    if (user != null) {
    console.log("User ", this.getUser().name, " logged in as ", this.getUser().role.name );
    }
  } 

  setToken( token : string) {
    this.authToken = token;
  }

  getToken() {
    if ( this.getUser()) {
      return this.authToken;
    }
  }
}
