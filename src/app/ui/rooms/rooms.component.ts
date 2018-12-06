import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private roomService : RoomService) { }

  rooms : Room[];

  myStatus = true;

  ngOnInit() {

    this.roomService.getAllRooms().subscribe(result=> this.rooms = result);
  }


  toggle() {
    console.log("checkbox clicked");
  }
}
