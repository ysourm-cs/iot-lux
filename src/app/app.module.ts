import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AdminModule } from './admin/admin.module';
import { JwtInterceptor } from './app.interceptor';
import { LoginComponent } from './component/login/login.component';
import { ErrorInterceptor } from './error.interceptor';
import { fakeBackendProvider } from './helper/fake-backend';

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
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule
  ],
  // providers: [ JwtInterceptor, ErrorInterceptor ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
