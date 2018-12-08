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

  private USERS_URL='http://localhost:8080/users/';

  getAllRooms() : Observable<Room[]> {
      return this.httpClient.get<Room[]>(this.ROOMS_URL);
  }

  // /users/{userId}/rooms")
  getAllUserRooms(userId : number)  : Observable<Room[]> {
    const url = `${this.USERS_URL}/${userId}/rooms`;
    return this.httpClient.get<Room[]>(url);
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

  // openAllDevices(userId: number, id: number): Observable<Room> {
  
  //   const url = `${this.USERS_URL}/{userId}/rooms/${id}/open`;
  //   return this.httpClient.put<Room>(url, id);
  // }

  // closeAllDevices(userId: number, id: number): Observable<Room> {

  //   const url = `${this.USERS_URL}/{userId}/rooms/${id}/close`;
  //   return this.httpClient.put<Room>(url, id);
  // }

}
