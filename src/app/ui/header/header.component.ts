import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../model/room';
import { User } from 'src/app/model/user';
import { UserStateService } from 'src/app/services/user-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private roomService : RoomService, private userStateService : UserStateService) { }

  rooms : Room[];
  
  // = [
  //  {id:1, name: "dasdas"},
  //  {id:2, name: "sadasdas"},
  //  {id:3, name:"xoxxo"}
  // ];

  user : User;

  ngOnInit() {
      this.roomService.getAllRooms().subscribe(result=> this.rooms = result);
      this.userStateService.userLoggedIn.subscribe(user=> this.user=user);   

      //console.log("headerComponent ngOnInit()");
      //console.log(this.rooms);
  }



  logout() {
    this.userStateService.setUser(null);
  }



}




