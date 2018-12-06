import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Device, DeviceType } from '../../model/device';
import { DeviceService } from '../../services/device.service';
import { RoomService } from '../../services/room.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  constructor(private deviceService : DeviceService, 
             private roomService : RoomService,
            private route : ActivatedRoute,
          private router : Router) { }

  device : Device;

  types : DeviceType[];

  rooms: Room[];

  id : number;

typeSelected : number;
  // roomSelected: number;

  ngOnInit() {

      this.id = Number(this.route.snapshot.paramMap.get('id'));  
      this.device = new Device(-1, "");

      if (this.id != -1) {
        this.deviceService.getDevice(this.id).subscribe(result=>{
          this.device=result;
          // this.typeSelected = this.device.type.id;
          // this.roomSelected = this.device.room != null ? this.device.room.id : 0 ;
        });
        
      }
      

      this.deviceService.getDeviceTypes().subscribe(result2=>this.types=result2);
      this.roomService.getAllRooms().subscribe(result3=>this.rooms = result3);
     // console.log(this.types);
  

  }

  compareTypes(a, b) {
    if ((a=== undefined) || (b === undefined )) {
      return false;
    }

    return a.id === b.id;
  }

  saveDevice() {

    console.log(this.types);
    console.log(this.device.type);

    if (this.id === -1) {
      this.deviceService.addNew(this.device).subscribe(result=> {
          console.log(result);
          this.router.navigate(['devices']);
          
      });

    } else {
      this.deviceService.update(this.device).subscribe(result=>{
        this.device = result;
        this.router.navigate(['devices']);
      });
    }

    
  }


  onTypeSelected(val:DeviceType) {
    console.log(val);
   // this.device.type= val;
  }



}
