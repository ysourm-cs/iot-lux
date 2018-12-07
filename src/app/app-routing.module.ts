import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from './component/devices/devices.component';
import { DeviceDetailComponent } from './detail/device-detail/device-detail.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { RoomDetailComponent } from './detail/room-detail/room-detail.component';
import { UserDetailComponent } from './detail/user-detail/user-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'devices',
    component: DevicesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: DeviceDetailComponent,
        canActivateChild: [AuthGuard]
      }
    ]
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: RoomDetailComponent,
        canActivateChild: [AuthGuard]
      }
    ]
  },
  {
    path: 'profile',
    component: UserDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
