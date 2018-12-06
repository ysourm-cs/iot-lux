import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Room } from '../model/room';
import { ServicesService } from './services.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient,
              private service: ServicesService) { }

  getRooms(): Observable<Room[]> {
    const url = `${this.service.getRoomUrl()}`
    return this.http.get<Room[]>(url)
      .pipe(catchError(this.service.handleError<any>('getRooms', null)));
  }

  getRoom(id: number): Observable<Room> {
    const url = `${this.service.getRoomUrl()}/${id}/devices`
    return this.http.get<Room>(url)
      .pipe(catchError(this.service.handleError<any>('getRoom', null)));
  }

  addRoom(room: Room): Observable<Room> {
    const url = `${this.service.getRoomUrl()}`;
    return this.http.post<Room>(url, room)
      .pipe(catchError(this.service.handleError<any>('addRoom', null)));
  }

  deleteRoom(id: number): Observable<void> {
    const url = `${this.service.getRoomUrl()}/${id}`;
    return this.http.delete<void>(url)
      .pipe(catchError(this.service.handleError<void>('deleteRoom', null)));
  }

  openAllDevices(id: number): Observable<Room> {
    const url = `${this.service.getRoomUrl()}/${id}/open`;
    return this.http.put<Room>(url, id)
      .pipe(catchError(this.service.handleError<any>('openAllDevices', null)));;
  }

  closeAllDevices(id: number): Observable<Room> {
    const url = `${this.service.getRoomUrl()}/${id}/close`;
    return this.http.put<Room>(url, id)
      .pipe(catchError(this.service.handleError<any>('closeAllDevices', null)));;
  }
}