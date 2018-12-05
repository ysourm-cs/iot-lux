import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[];
  
  constructor(private roomService: RoomService) { }

  getRooms(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  ngOnInit() {
    this.getRooms();
  }
}
