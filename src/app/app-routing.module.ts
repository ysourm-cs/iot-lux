import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from './component/devices/devices.component';
import { DeviceDetailComponent } from './detail/device-detail/device-detail.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { RoomDetailComponent } from './detail/room-detail/room-detail.component';
import { UserDetailComponent } from './detail/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/:id', component: DeviceDetailComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: 'profile', component: UserDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
