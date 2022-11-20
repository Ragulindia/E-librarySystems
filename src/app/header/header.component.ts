import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rout: Router, public auth: AuthService, private user: UserService) { }


  // userlog: boolean = false;

  ngOnInit() {
  //   let userName1 = this.user.log()
    

  //   console.log(userName1);

  //   if (userName1 == 'admin') {
  //     this.userlog = true;
  //   }
  //   else if (userName1 == null) {
  //     this.userlog = false;
  //   }
  //   console.log(userName1);

  // }


  // logout(){
  //   localStorage.clear();
  //      this.rout.navigateByUrl('/login');
   }

}
