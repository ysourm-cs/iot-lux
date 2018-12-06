import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/model/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-admin-list',
  templateUrl: './room-admin-list.component.html',
  styleUrls: ['./room-admin-list.component.css']
})
export class RoomAdminListComponent implements OnInit {

  constructor(private roomService : RoomService,
              private router : Router) { }

  rooms : Room[];

  ngOnInit() {
    this.refreshRooms();
  }

  refreshRooms() {
    this.roomService.getAllRooms().subscribe(result=>this.rooms = result);
  } 

  editRoom(id : number) {
    //console.log("Edit device with id ", id);
    //this.router.navigateByUrl('/devices/'+id);
    this.router.navigate(['/rooms-admin/', id]);
    //this.router.navigate(['/users/', id]);
  }

  deleteRoom(id : number) {
    console.log("Delete room with id ", id );

    //TODO: Switch to subscribe
    this.roomService.deleteRoom(id).subscribe(
      result=> {
        console.log("Room deleted succesfully.");
        this.refreshRooms();
      }
    );

  }

  addNewRoom() {
    this.router.navigate(['/rooms-admin/', -1]);
  }

}
