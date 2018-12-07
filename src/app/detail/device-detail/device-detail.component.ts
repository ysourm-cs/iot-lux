import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Device, Status } from 'src/app/model/device';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  device: Device;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDevice();
  }

  getDevice(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deviceService.getDevice(id)
      .subscribe(device => this.device = device);
  }

  openDevice(): void {
    this.deviceService.openDevice(this.device.id)
      .subscribe(device => this.device = device);
  }

  closeDevice(): void {
    this.deviceService.closeDevice(this.device.id)
      .subscribe(device => this.device = device);
  }

  
  goBack(): void {
    this.location.back();
  }

}
