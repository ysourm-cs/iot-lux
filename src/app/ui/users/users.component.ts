import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService : UserService) { }

  users : User[];

  ngOnInit() {
      console.log('UsersComponent.init()');
      this.userService.getUsers().subscribe(result=>this.users = result);
  }

}
