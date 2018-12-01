import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './ui/users/users.component';
import { AdminComponent } from './ui/admin/admin.component';
import { RoomsComponent } from './ui/rooms/rooms.component';
import { DevicesComponent } from './ui/devices/devices.component';
import { DeviceTypesComponent } from './ui/device-types/device-types.component';
import { DeviceDetailsComponent } from './ui/device-details/device-details.component';
import { RoomdetailsComponent } from './ui/roomdetails/roomdetails.component';


const routes: Routes = [
    { path:'', component : AdminComponent},
    { path:'users', component  : UsersComponent},
    { path:'rooms', component : RoomsComponent},
    { path:'rooms/:id', component : RoomdetailsComponent},
    { path:'devices', component : DevicesComponent},
    { path:'devices/:id', component : DeviceDetailsComponent},
    { path:'types', component : DeviceTypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
