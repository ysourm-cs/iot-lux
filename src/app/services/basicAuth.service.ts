import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { UserStateService } from './user-state.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  loggedInUser : User;
  constructor(private httpClient : HttpClient, private userStateService : UserStateService) { }


  login( email : string,  password : string ) : Observable<User>  {

    let basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + password);

    let headers = new HttpHeaders( {
      Authorization : basicAuthHeaderString
    });

    console.log("Callin basicauth with headers : ", basicAuthHeaderString );
    return this.httpClient.get<User>("http://localhost:8080/basicauth", {headers});  }

  getAuthenticatedUser() {
    return this.userStateService.getUser();
  }

  getAuthenticatedToken() {
    if ( this.getAuthenticatedUser() ) {
      return this.userStateService.getToken();
    }
  }

  logout() {
    this.userStateService.setUser(null);
    this.userStateService.setToken(null);
  }

}


// this.httpClient.get<User>("http://localhost:8080/basicauth", {headers}).subscribe(
//        result=> { let user : User = result; 
//         this.userStateService.setUser(user);
//         console.log("Found user : " + user.name);
//       });
//       return true;