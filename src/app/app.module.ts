import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DevicesComponent } from './component/devices/devices.component';
import { DeviceDetailComponent } from './detail/device-detail/device-detail.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { RoomDetailComponent } from './detail/room-detail/room-detail.component';
import { UsersComponent } from './component/users/users.component';
import { UserDetailComponent } from './detail/user-detail/user-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailComponent,
    RoomsComponent,
    RoomDetailComponent,
    UsersComponent,
    UserDetailComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }