import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  email: string;
  password: string

  constructor(public authService: AuthService,
              public router: Router) { }
 
  login(username: string, password: string) {
    this.authService.login(username, password)
      .subscribe( _ => {
        if (this.authService.isLoggedIn) {
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
          this.router.navigate([redirect]);
        }
      });
  }
 
  logout() {
    this.authService.logout();
  }
}