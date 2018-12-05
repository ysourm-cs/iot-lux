import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Room } from 'src/app/model/room';
import { Device } from 'src/app/model/device';
import { RoomService } from 'src/app/service/room.service';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room;
  devices: Device[];
  
  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location,
    private deviceService: DeviceService
  ) { }

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
    this.deviceService.getDevicesByRoomId(this.room.id)
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
    this.deviceService.openAllDevices(this.room.id)
      .subscribe(devices => this.devices = devices);
  }

  closeAllDevices(): void {
    this.deviceService.closeAllDevices(this.room.id)
      .subscribe(devices => this.devices = devices);
  }

  goBack(): void {
    this.location.back();
  }
}
