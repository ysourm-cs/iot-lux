import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { Room } from '../../model/room';
import { DeviceService } from 'src/app/services/device.service';
import { Location } from '@angular/common';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private deviceService : DeviceService,
  private roomService : RoomService,
  private location: Location ) { }

  room : Room;
  devices: Device[];

  id: number;
  private sub: any;



  ngOnInit() {
    this.getRoom();   
    this.getDevicesByRoomId();
  }

  getRoom(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.roomService.getRoom(id)
      .subscribe(room => this.room = room);
  }

  getDevicesByRoomId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.deviceService.getDevicesByRoomId(id)
      .subscribe(devices => this.devices = devices);
  }

  openDevice(id: number): void {
    this.deviceService.openDevice(id)
      .subscribe(device => this.devices[id] = device);
  }

  closeDevice(id: number): void {
    this.deviceService.closeDevice(id)
      .subscribe(device => this.devices[id] = device);
  }

  openAllDevices(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deviceService.openAllDevices(id)
      .subscribe(devices => this.devices = devices);
  }

  closeAllDevices(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deviceService.closeAllDevices(id)
      .subscribe(devices => this.devices = devices);
  }

  goBack(): void {
    this.location.back();
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }


}


