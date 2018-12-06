import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { User, Role } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService : UserService,
            private route : ActivatedRoute,
          private router : Router) { }

  user : User;

  role : Role[];

  id : number;

roleSelected : number;

  ngOnInit() {

      this.id = Number(this.route.snapshot.paramMap.get('id'));  
      this.user = new User(-1, "");

      if (this.id != -1) {
        this.userService.getUser(this.id).subscribe(result=>{
          this.user=result;
        });
      }
      this.userService.getUserRole().subscribe(result2=>this.role=result2);
  }

  saveUser() {

    if (this.id === -1) {
      this.userService.addNew(this.user).subscribe(result=> {
          console.log(result);  

      });

    } else {
      this.userService.update(this.user).subscribe(result=>this.user = result);
    }

    this.router.navigate(['users']);

  }


  onRoleSelected(val:Role) {
    console.log(val);
  }
}
