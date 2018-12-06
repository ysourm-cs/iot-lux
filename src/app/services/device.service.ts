import { Injectable } from '@angular/core';
import { Device, DeviceType } from '../model/device';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private DEVICES_URL='http://localhost:8080/devices/';

  private ROOMS_URL = 'http://localhost:8080/rooms';
  private USERS_URL = 'http://localhost:8080/users';

  DEVICES_TYPES_URL = 'http://localhost:8080/types/';

  constructor(private httpClient : HttpClient) { }

  getDevices() : Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.DEVICES_URL);
  }    

  getDevice(id:number) : Observable<Device> {
    return this.httpClient.get<Device>(this.DEVICES_URL+id);
  }

  addNew( device: Device )  : Observable<Device> {
    return this.httpClient.post<Device>(this.DEVICES_URL, device);
  }

  
  delete(id : number) : Observable<Device>  {
    return this.httpClient.delete<Device>(this.DEVICES_URL+id);
  } 

  update( device : Device) : Observable<Device> {
    console.log("Puttin : ", this.DEVICES_URL + device.id)
    return this.httpClient.put<Device>(this.DEVICES_URL + device.id, device );
  }

  openDevice(id: number): Observable<Device> {
    // DEVICES[id].status = 1;
    // return of(DEVICES[id]);
    const deviceUrl = `${this.DEVICES_URL}/${id}/open`;
    return this.httpClient.put<Device>(deviceUrl, id)
      .pipe(catchError(this.handleError<any>('openDevice', [])));
  }

  closeDevice(id: number): Observable<Device> {
    // DEVICES[id].status = 0;
    // return of(DEVICES[id]);
    const deviceUrl = `${this.DEVICES_URL}/${id}/close`;
    return this.httpClient.put<Device>(deviceUrl, id)
      .pipe(catchError(this.handleError<any>('closeDevice', [])));
  }

  openAllDevices(id: number): Observable<Device[]> {
    var i;
    const url = `${this.ROOMS_URL}/${id}/open`;
    return this.httpClient.put<Device[]>(url,id);
  }

  closeAllDevices(id: number): Observable<Device[]> {
    // var i;
    // for (i=0; i<ROOMS[id].devices.length; i++) {
    //   ROOMS[id].devices[i].status = 0;
    // }
    // return of(ROOMS[id].devices);
    const url = `${this.ROOMS_URL}/${id}/close`;
    return this.httpClient.put<Device[]>(url,id)
 
  }

  getDevicesByUserId(id: number): Observable<Device[]> {
    // return of(USERS[id].devices);
    const url = `${this.USERS_URL}/${id}/devices`;
    return this.httpClient.get<Device[]>(url)
      .pipe(catchError(this.handleError<any>('getDevicesByUserID', [])));
  }

  getDevicesByRoomId(id: number): Observable<Device[]> {
    // return of(ROOMS[id].devices);
    const url = `${this.ROOMS_URL}/${id}/devices`;
    return this.httpClient.get<Device[]>(url)
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


  /// DEVICE TYPES

  getDeviceTypes() : Observable<DeviceType[]> {
    console.log('getDeviceTypes() called')
    return this.httpClient.get<DeviceType[]>(this.DEVICES_TYPES_URL);
  }


  


}
