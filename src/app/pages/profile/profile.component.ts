import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _dataService: DataServiceService) {
    this._dataService.checkAuth();
  }

  ngOnInit() {
  }

}
