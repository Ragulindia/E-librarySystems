import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private rout: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    rout: Router;
    let userName = localStorage.getItem('user');
    // console.log(userName);

    if (userName == 'admin') {
      return true;
    } else {
      this.rout.navigateByUrl('/login');
      return false;
      
    }

  }

}
