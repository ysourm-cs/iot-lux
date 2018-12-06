import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from './basicAuth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService : BasicAuthService) { }

  intercept(request:HttpRequest<any>, next: HttpHandler) {
      // let email = this.basicAuthService.getAuthenticatedUser().email;
      // let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();

      let email = "Yannis@gmail.com";
      let pwd = '1';

      let basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + pwd);
      if ( email && basicAuthHeaderString) {
      request = request.clone( {
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
      
      return next.handle(request);
    } else {
      return next.handle(request);
    }
      


  }
}
