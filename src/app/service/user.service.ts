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
    const url = `${this.service.getUserUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(catchError(this.service.handleError<User>('addUser', null)));
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.service.getUserUrl}`;
    return this.http.delete<void>(url)
      .pipe(catchError(this.service.handleError<any>('deleteUser', null)));
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.service.getUserUrl}`;
    return this.http.post<User>(url, user)
      .pipe(catchError(this.service.handleError<any>('updateUser', null)));
  }
}
