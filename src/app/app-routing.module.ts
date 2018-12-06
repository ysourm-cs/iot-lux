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
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { RoomsTopComponent } from './ui/rooms-top/rooms-top.component';


const routes: Routes = [
    { path:'', component : AdminComponent},
    { path:'login', component: LoginComponent},
    { path:'admin', component: AdminComponent, canActivate : [AdminGuard]},
    { path:'users', component  : UsersComponent, canActivate : [LoginGuard]},
    { path:'rooms', component : RoomsTopComponent, canActivate : [LoginGuard]},
    { path:'rooms/:id', component : RoomdetailsComponent, canActivate : [LoginGuard]},
    { path:'devices', component : DevicesComponent, canActivate: [LoginGuard]},
    { path:'devices/:id', component : DeviceDetailsComponent, canActivate : [LoginGuard]},
    { path:'types', component : DeviceTypesComponent, canActivate : [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
