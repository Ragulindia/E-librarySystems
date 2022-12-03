import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  log(): any {

    var userName = localStorage.getItem('user');
    return userName;
  }

}
