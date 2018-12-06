import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleLoginService {

  constructor(private httpClient : HttpClient) { }


  login( email : string,  password : string ) : Observable<User>  {

    return this.httpClient.get<User>("http://localhost:8080/login/"+email);  }

}
