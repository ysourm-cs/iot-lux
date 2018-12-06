import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../model/device';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(
    private router : Router,
    private deviceService : DeviceService ) { }

  devices : Device[];

  ngOnInit() {
    this.refreshDevices();
  }

  refreshDevices() {
    this.deviceService.getDevices().subscribe(result=>this.devices = result);
  } 

  editDevice(id : number) {
    //console.log("Edit device with id ", id);
    //this.router.navigateByUrl('/devices/'+id);
    this.router.navigate(['/devices/', id]);
  }

  deleteDevice(id : number) {
    console.log("Delete device with id ", id );

    //TODO: Switch to subscribe
    this.deviceService.delete(id).subscribe(
      result=> {
        console.log("Device deleted succesfully.");
        this.refreshDevices();
      }
    );

  }

  addNewDevice() {
    this.router.navigate(['/devices/', -1]);
  }

}
