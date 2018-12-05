import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Room } from '../model/room';
// import { ROOMS } from '../mock/mock-rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private urlRoom = 'http://localhost:8080/rooms'

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    // return of(ROOMS);
    const url = `${this.urlRoom}`
    return this.http.get<Room[]>(url);
  }

  getRoom(id: number): Observable<Room> {
    // return of(ROOMS[id]);
    const url = `${this.urlRoom}/${id}/devices`
    return this.http.get<Room>(url);
  }

  openAllDevices(id: number): Observable<Room> {
    // var i;
    // for (i=0; i<ROOMS[id].devices.length; i++) {
    //   ROOMS[id].devices[i].status = 1;
    // }
    // return of(ROOMS[id]);
    const url = `${this.urlRoom}/${id}/open`;
    return this.http.put<Room>(url, id);
  }

  closeAllDevices(id: number): Observable<Room> {
    // var i;
    // for (i=0; i<ROOMS[id].devices.length; i++) {
    //   ROOMS[id].devices[i].status = 0;
    // }
    // return of(ROOMS[id]);
    const url = `${this.urlRoom}/${id}/close`;
    return this.http.put<Room>(url, id);
  }
}
