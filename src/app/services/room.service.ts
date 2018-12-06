import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient : HttpClient) {  }

  private ROOMS_URL='http://localhost:8080/rooms/';

  getAllRooms() : Observable<Room[]> {

      return this.httpClient.get<Room[]>(this.ROOMS_URL);

  }

  getRoom(id:number) : Observable<Room> {
    return this.httpClient.get<Room>(this.ROOMS_URL+id);
  }

  addRoom( room : Room) : Observable<Room> {
    return this.httpClient.post<Room>(this.ROOMS_URL, room);
  }

  updateRoom(room : Room) {
    return this.httpClient.put<Room>(this.ROOMS_URL+room.id, room);
  }

  deleteRoom(id:number) : Observable<Room> {
    return this.httpClient.delete<Room>(this.ROOMS_URL+id);
  }

  openAllDevices(id: number): Observable<Room> {
    // var i;
    // for (i=0; i<ROOMS[id].devices.length; i++) {
    //   ROOMS[id].devices[i].status = 1;
    // }
    // return of(ROOMS[id]);
    const url = `${this.ROOMS_URL}/${id}/open`;
    return this.httpClient.put<Room>(url, id);
  }

  closeAllDevices(id: number): Observable<Room> {
    // var i;
    // for (i=0; i<ROOMS[id].devices.length; i++) {
    //   ROOMS[id].devices[i].status = 0;
    // }
    // return of(ROOMS[id]);
    const url = `${this.ROOMS_URL}/${id}/close`;
    return this.httpClient.put<Room>(url, id);
  }

}
