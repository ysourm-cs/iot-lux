import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-rooms-menu',
  templateUrl: './rooms-menu.component.html',
  styleUrls: ['./rooms-menu.component.css']
})
export class RoomsMenuComponent implements OnInit {

  constructor(private roomService : RoomService) { }

  rooms : Room[];
  
  ngOnInit() {

    this.roomService.getAllRooms().subscribe(result=> this.rooms = result);
  }

}
