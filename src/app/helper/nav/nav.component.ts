import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public _dataService: DataServiceService, private router: Router) {
  }

  logout() {
    this._dataService.isLoggedin = false;

    if (!this._dataService.isLoggedin) {
      this.router.navigateByUrl('/');
    }
  }
  ngOnInit() {
  }

}
