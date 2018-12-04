import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private router : Router,
    private userService : UserService ) { }

  users : User[];
  
  ngOnInit() {
    this.refreshUsers();
  }

  refreshUsers() {
    this.userService.getUsers().subscribe(result=>this.users = result);
  } 

  editUser(id : number) {
    this.router.navigate(['/users/', id]);
  }

  deleteUser(id : number) {
    console.log("Delete user with id ", id );
    this.userService.delete(id);
    this.refreshUsers();
  }

  addNewUser() {
    this.router.navigate(['/users/', -1]);
  }

}
