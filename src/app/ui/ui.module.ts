import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AdminComponent } from './admin/admin.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceTypesComponent } from './device-types/device-types.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { RoomsTopComponent } from './rooms-top/rooms-top.component';
import { RoomsMenuComponent } from './rooms-menu/rooms-menu.component';
 

@NgModule({
  imports: [ CommonModule, AppRoutingModule, FormsModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, UsersComponent, RoomsComponent, AdminComponent, DevicesComponent, DeviceTypesComponent, DeviceDetailsComponent, RoomdetailsComponent, RoomsTopComponent, RoomsMenuComponent],
  exports: [LayoutComponent, UsersComponent]
})
export class UiModule { }
