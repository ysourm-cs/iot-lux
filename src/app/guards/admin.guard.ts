import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {UserService} from 'src/app/service/user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const isAdmin = this.userService.isAdminUser();
    var isAdmin = false;
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}