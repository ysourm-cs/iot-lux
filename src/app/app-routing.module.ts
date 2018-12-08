import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './ui/users/users.component';
import { UserDetailsComponent } from './ui/user-details/user-details.component';
import { AdminComponent } from './ui/admin/admin.component';
import { RoomsComponent } from './ui/rooms/rooms.component';
import { DevicesComponent } from './ui/devices/devices.component';
import { DeviceTypesComponent } from './ui/device-types/device-types.component';
import { DeviceDetailsComponent } from './ui/device-details/device-details.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { RoomsTopComponent } from './ui/rooms-top/rooms-top.component';
import { RoomDetailComponent } from './ui/room-detail/room-detail.component';
import { RoomAdminListComponent } from './ui/room-admin-list/room-admin-list.component';
import { RoomAdminDetailComponent } from './ui/room-admin-detail/room-admin-detail.component';

const routes: Routes = [
    { path:'', component : LoginComponent},
    { path:'login', component: LoginComponent},
    { path:'admin', component: AdminComponent, canActivate : [AdminGuard, LoginGuard]},
    { path:'users', component  : UsersComponent, canActivate : [LoginGuard]},
    { path:'users/:id', component : UserDetailsComponent, canActivate : [LoginGuard]},
    { path:'rooms-admin', component : RoomAdminListComponent, canActivate : [AdminGuard]},
    { path:'rooms-admin/:id', component : RoomAdminDetailComponent, canActivate : [AdminGuard]},
    { path:'rooms', component : RoomsTopComponent, canActivate : [LoginGuard]},
    { path:'rooms/:id', component : RoomDetailComponent , canActivate : [LoginGuard]},
    { path:'devices', component : DevicesComponent, canActivate: [LoginGuard]},
    { path:'devices/:id', component : DeviceDetailsComponent, canActivate : [LoginGuard]},
    { path:'types', component : DeviceTypesComponent, canActivate : [LoginGuard]}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
