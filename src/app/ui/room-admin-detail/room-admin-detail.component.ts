import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { User } from 'src/app/model/user';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room-admin-detail',
  templateUrl: './room-admin-detail.component.html',
  styleUrls: ['./room-admin-detail.component.css']
})
export class RoomAdminDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router, private roomService : RoomService) { }

  id : number;

  room : Room;

  ngOnInit() {

    this.id = Number(this.route.snapshot.paramMap.get('id'));  
    this.room = new Room(-1, "");

    if (this.id != -1) {
      this.roomService.getRoom(this.id).subscribe(result=>{
        this.room=result;
      });
    }
   
}

saveRoom() {

  if (this.id === -1) {
    this.roomService.addRoom(this.room).subscribe(result=> {
        console.log(result);  
        this.router.navigate(['rooms-admin']);
    });

  } else {
    this.roomService.updateRoom(this.room).subscribe(result=>{
      this.room = result;
      this.router.navigate(['rooms-admin']);
    })
  }


}


}
