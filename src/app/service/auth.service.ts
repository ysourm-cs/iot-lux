import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './services.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: HttpClient,
              private service: ServicesService) { }

    login(username: string, password: string): Observable<User> {
      var user = new User();
      user.email = username;
      user.password = password;
      return this.http.put<User>(`${this.service.getUserUrl}/authenticate`, user)
        .pipe(catchError(catchError(this.service.handleError<any>('login', null))));
    }

    logout() {
        // Nothing
    }

  getLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}