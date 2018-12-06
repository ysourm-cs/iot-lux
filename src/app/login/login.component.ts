import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../services/basicAuth.service';
import { UserStateService } from '../services/user-state.service';
import { Router } from '@angular/router';
import { SimpleLoginService } from '../services/simple-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private basicAuthloginSrv : BasicAuthService,
    private simpleLoginSrv : SimpleLoginService,
    private userStateService : UserStateService,
    private router : Router) { }

  emailaddress : string;
  pwd : string;  

  invalidLogin : boolean;

  ngOnInit() {
  }

  handleSimpleLogin() {
    console.log("simpleLogin called");
    this.simpleLoginSrv.login(this.emailaddress, this.pwd).subscribe(
      result=> {
        console.log(result);
        this.userStateService.setUser(result);
        this.router.navigate(['rooms']);
      }
    )
  }

  handleBasicAuthLogin( ) {
    //console.log("calling login with email " + this.emailaddress);
    this.basicAuthloginSrv.login(this.emailaddress, this.pwd).subscribe(
      result => {
        console.log(result);
        this.invalidLogin = false;
        this.router.navigate(['rooms']);
      }, error => {
        console.log("Paparia");
        console.log(error);
        this.invalidLogin = true;
      }

    );
    //console.log("User ", user.name, " has logged in");
    //this.userStateService.setUser(user);
  }

}
