import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public pagenotFound: string = "page-not-found";

  constructor() {
    localStorage.setItem('page', this.pagenotFound);
  }

  ngOnInit(): void {
  }

}
