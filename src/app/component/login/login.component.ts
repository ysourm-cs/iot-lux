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
 
  constructor(public authService: AuthService,
              public router: Router) {
    this.setMessage();
  }
 
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
 
  login(username: string, password: string) {
    this.message = 'Trying to log in ...';
 
    this.authService.login(username, password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        this.router.navigate([redirect]);
      }
    });
  }
 
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}