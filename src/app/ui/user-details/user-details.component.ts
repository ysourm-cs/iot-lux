import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { User, Role } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Device } from 'src/app/model/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService : UserService,
            private deviceService : DeviceService,
            private route : ActivatedRoute,
          private router : Router) { }

  user : User;

  roles : Role[];

  devices : Device[];
  
  id : number;

  ngOnInit() {

      this.id = Number(this.route.snapshot.paramMap.get('id'));  
      this.user = new User(-1, "");

      if (this.id != -1) {
        this.userService.getUser(this.id).subscribe(result=>{
          this.user=result;
        });
      }
      this.userService.getUserRole().subscribe(result2=>this.roles=result2);
      this.deviceService.getDevices().subscribe(result3=> {
        this.devices=result3;
        console.log("Found devices : ", this.devices)}
        );
  }

  saveUser() {

    if (this.id === -1) {
      this.userService.addNew(this.user).subscribe(result=> {
          console.log(result);  
          this.router.navigate(['users']);
      });

    } else {
      this.userService.update(this.user).subscribe(result=>{
        this.user = result;
        this.router.navigate(['users']);
      })
    }

  
  }

  roleComparator(a,b) {
    if (a==undefined || b==undefined) return false;

    return a.id === b.id;

  }

  // filterDevices(event) {
  //   console.log("filterDevices called");
  // }


//   filterDevices(event) {
//     let query=event.query;
//     this.deviceService.getDevices().subscribe(result=>
//       { 
//         console.log("<<<", result);
//         this.devices = this.filterDevice(query, result);})

      

//   }

//   filterDevice(query, devices2: Device[]) : Device[]
//  {
//    let filtered : Device[] = [];
//    for (let i=0; i< devices2.length; i++) {
//      let device = devices2[i];
//      console.log("filtering device : ", device.description.toLowerCase() );
//      if (device.description.toLowerCase().indexOf(query.toLowerCase())==0) {
//        filtered.push(device);
//      }
//    }

//  return filtered;
// }

}
 
