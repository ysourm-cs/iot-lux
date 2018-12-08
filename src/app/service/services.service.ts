import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // private apiUrl = 'http://localhost:8080';
  private apiUrl = 'http://localhost:4200';
  private userUrl = 'http://localhost:8080/users';
  private roomUrl = 'http://localhost:8080/rooms';
  private deviceUrl = 'http://localhost:8080/devices';

  constructor() { }

  getApiUrl() { return this.apiUrl; }
  
  getUserUrl() { return this.userUrl; }

  getDeviceUrl() { return this.deviceUrl; }

  getRoomUrl() { return this.roomUrl; }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
