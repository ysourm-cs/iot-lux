import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/model/room';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-rooms-menu',
  templateUrl: './rooms-menu.component.html',
  styleUrls: ['./rooms-menu.component.css']
})
export class RoomsMenuComponent implements OnInit {

  constructor(private roomService : RoomService,  private userStateService : UserStateService) { }

  rooms : Room[];
  
  ngOnInit() {
    const userId = this.userStateService.getUser().id;
    this.roomService.getAllUserRooms(userId).subscribe(result=> this.rooms = result);
  }

}
