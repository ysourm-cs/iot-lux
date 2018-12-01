import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS_URL='http://localhost:8080/users';

  constructor(private httpClient : HttpClient) { }

  getUsers() : Observable<User[]> {
    //return this.httpClient.get<any>(this.USERS_URL).pipe(map(response => {return response.content;}));
    return this.httpClient.get<User[]>(this.USERS_URL);
    
  }    

  addUser( name : string, surname : string, email : string, password : string)  {
    

    
    this.httpClient.post(this.USERS_URL, {  });
  }

 }

