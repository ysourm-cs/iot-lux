import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient : HttpClient) {  }

  ROOMS_URL='http://localhost:8080/rooms/';

  getAllRooms() : Observable<Room[]> {

      return this.httpClient.get<Room[]>(this.ROOMS_URL);

  }

  getRoom(id:number) : Observable<Room> {
    return this.httpClient.get<Room>(this.ROOMS_URL+id);
  }

}
