import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { AdminGuard } from '../guards/admin.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          { path: 'devices', component: ManageDevicesComponent },
          { path: 'users', component: ManageUsersComponent },
          { path: 'rooms', component: ManageRoomsComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}