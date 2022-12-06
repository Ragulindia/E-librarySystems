import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rout:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  ErrorMessage:boolean=false;
  logfunction() {
    // console.log('hello');
    // console.log(this.loginForm.value);
    if (this.loginForm.controls.username.value != "admin" || this.loginForm.controls.password.value != "admin123") {
      // this.ErrorMessage=true;
      // if(this.loginForm.controls.username.value == 'user' || this.loginForm.controls.password.value == 'user123'){
      //   localStorage.setItem('user1','user');
      // }
      // else{this.ErrorMessage=true;}
      this.toastr.error('Invalid username or password','Failed!')
    } 
    else {
      // this.ErrorMessage=false;
      this.rout.navigateByUrl('/home');
      localStorage.setItem('user',this.loginForm.controls.username.value);
      this.toastr.success('Login sucessfully','',{timeOut:3000})
    }
    
  }
}
