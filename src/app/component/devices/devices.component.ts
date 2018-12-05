import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/model/device';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Device[];

  constructor(private deviceService: DeviceService) { }

  getDevices(): void {
    console.log('Hello');
    this.deviceService.getDevices()
      .subscribe(devices => this.devices = devices);
  }

  ngOnInit() {
    this.getDevices();
  }
}
