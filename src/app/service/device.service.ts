import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Device } from '../model/device';
import { DEVICES } from '../mock/mock-devices';
import { ROOMS } from '../mock/mock-rooms';
import { USERS } from '../mock/mock-users';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceUrl = 'http://localhost:8080/devices';
  private roomUrl = 'http://localhost:8080/rooms';
  private userUrl = 'http://localhost:8080/users';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  getDevice(id: number): Observable<Device> {
    // return of(DEVICES[id]);
    const deviceUrl = `${this.deviceUrl}/${id}`;
    return this.http.get<Device>(deviceUrl)
      .pipe(catchError(this.handleError<Device>('getDevice', null)));
  }
  
  getDevices(): Observable<Device[]> {
    // return of(DEVICES);
    return this.http.get<Device[]>(this.deviceUrl)
     .pipe(catchError(this.handleError('getDevices', [])));
  }

  updateDevice(device: Device): Observable<any> {
    // DEVICES[device.id] = device;
    // return of(DEVICES);
    return this.http.put(this.deviceUrl, device, httpOptions)
      .pipe(catchError(this.handleError<any>('updateDevice')));
  }

  deleteDevice(id: number): Observable<any> {
    // DEVICES.splice(id, 1);
    // return of(DEVICES);
    const deviceUrl = `${this.deviceUrl}/${id}`;
    return this.http.delete<any>(deviceUrl)
      .pipe(catchError(this.handleError<any>('deleteDevice', [])));
  }

  openDevice(id: number): Observable<Device> {
    // DEVICES[id].status = 1;
    // return of(DEVICES[id]);
    const deviceUrl = `${this.deviceUrl}/${id}/open`;
    return this.http.put<Device>(deviceUrl, id)
      .pipe(catchError(this.handleError<any>('openDevice', [])));
  }

  closeDevice(id: number): Observable<Device> {
    // DEVICES[id].status = 0;
    // return of(DEVICES[id]);
    const deviceUrl = `${this.deviceUrl}/${id}/close`;
    return this.http.put<Device>(deviceUrl, id)
      .pipe(catchError(this.handleError<any>('closeDevice', [])));
  }

  openAllDevices(id: number): Observable<Device[]> {
    var i;
    // for (i=0; i<ROOMS[id].devices.length; i++) {
    //   ROOMS[id].devices[i].status = 1;
    // }
    // return of(ROOMS[id].devices);
    const url = `${this.roomUrl}/${id}/open`;
    return this.http.put<Device[]>(url,id);
  }

  closeAllDevices(id: number): Observable<Device[]> {
    // var i;
    // for (i=0; i<ROOMS[id].devices.length; i++) {
    //   ROOMS[id].devices[i].status = 0;
    // }
    // return of(ROOMS[id].devices);
    const url = `${this.roomUrl}/${id}/close`;
    return this.http.put<Device[]>(url,id)
 
  }

  getDevicesByUserId(id: number): Observable<Device[]> {
    // return of(USERS[id].devices);
    const url = `${this.userUrl}/${id}/devices`;
    return this.http.get<Device[]>(url)
      .pipe(catchError(this.handleError<any>('getDevicesByUserID', [])));
  }

  getDevicesByRoomId(id: number): Observable<Device[]> {
    // return of(ROOMS[id].devices);
    const url = `${this.roomUrl}/${id}/devices`;
    return this.http.get<Device[]>(url)
     .pipe(catchError(this.handleError('getDevices', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
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