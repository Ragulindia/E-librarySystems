import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private rout: Router) { }
   userlog:boolean = false;
  loggedin() {
    let userName = localStorage.getItem('user');
    
    // console.log(userName);
    if (userName == 'admin') {
        this.userlog = true;
      return true;
    } else {
      this.userlog = false;
      return false;

    }

  }
  logoutuser() {
    localStorage.clear();
    window.location.reload();
    this.rout.navigateByUrl('/login');
  }
}
