import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStateService } from '../services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
constructor(private userStateService : UserStateService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userStateService.getUser() != undefined &&
      this.userStateService.getUser() != null && this.userStateService.user.role.name=="ADMIN";
  }



}
