import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-adminapp-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // clickRooms() {
  //  console.log("Rooms clicked!")
  //   this.router.navigate(['rooms-admin']);
  // }

  // clickDevices() {
  //   //console.log("Devices clicked!")
  //   this.router.navigate(['devices']);
  // }

  // clickUsers() {
  //  // console.log("Users clicked!")
  //   this.router.navigate(['users']);
  // }


}
