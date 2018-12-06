import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UiModule } from './ui/ui.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpIntercepterBasicAuthService } from './services/http-intercepter-basic-auth.service';
import { RouterModule } from '@angular/router';
import { RoomAdminListComponent } from './ui/room-admin-list/room-admin-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomAdminListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    UiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass : HttpIntercepterBasicAuthService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
