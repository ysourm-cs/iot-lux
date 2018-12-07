import { Component, OnInit } from '@angular/core';

import { Device } from 'src/app/model/device';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  devices: Device[];

  constructor(private deviceService: DeviceService) { }
  
  getDevices(): void {
    this.deviceService.getDevices()
      .subscribe(devices => this.devices = devices);
  }

  ngOnInit() {
    this.getDevices();
  }
}