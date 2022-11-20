import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
  //   let userName = localStorage.getItem('user');
  //   console.log(userName);

  //   if (userName == null || userName == "") {
  //     this.rout.navigateByUrl('/login');

  //   } else {

  //   }
   }

}
