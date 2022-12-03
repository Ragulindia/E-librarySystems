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

  // validUrl(){

  //   let validLink = localStorage.getItem('page');
  //   var headerView:boolean = true;
  //   if (validLink == 'page-not-found') {
  //     headerView = false;
  //     return false;
      
  //   } else {
  //     headerView = true;
  //     return true;
  //   }

  }
