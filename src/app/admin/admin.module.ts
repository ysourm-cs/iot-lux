import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageDevicesComponent,
    ManageUsersComponent,
    ManageRoomsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
