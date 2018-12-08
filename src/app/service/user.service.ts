import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './services.service';
import { User } from '../model/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private service: ServicesService) { }

  getUser(id: number): Observable<User> {
    const url = `${this.service.getUserUrl()}/${id}`;
    return this.http.get<User>(url)
      .pipe(catchError(this.service.handleError<User>('getUser', null)));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.service.getUserUrl())
      .pipe(catchError(this.service.handleError<User[]>('getUsers', null)));
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.service.getUserUrl(), user)
      .pipe(catchError(this.service.handleError<User>('addUser', null)));
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(this.service.getUserUrl(), user)
      .pipe(catchError(this.service.handleError<any>('updateUser', null)));
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.service.getUserUrl())
      .pipe(catchError(this.service.handleError<any>('deleteUser', null)));
  }
}
