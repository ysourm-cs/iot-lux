import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private roomService : RoomService, ) { }

  rooms : Room[];
  
  // = [
  //  {id:1, name: "dasdas"},
  //  {id:2, name: "sadasdas"},
  //  {id:3, name:"xoxxo"}
  // ];

  ngOnInit() {
      this.roomService.getAllRooms().subscribe(result=> this.rooms = result);
      //console.log("headerComponent ngOnInit()");
      //console.log(this.rooms);
  }



}




