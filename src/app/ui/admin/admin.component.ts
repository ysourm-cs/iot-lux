import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  clickRooms() {
    console.log("Rooms clicked!")
    this.router.navigateByUrl('rooms');
  }

  clickDevices() {
    console.log("Devices clicked!")
    this.router.navigateByUrl('devices');
  }

  clickUsers() {
    console.log("Users clicked!")
    this.router.navigateByUrl('users');
  }


}
