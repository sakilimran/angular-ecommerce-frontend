import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public _dataService: DataServiceService) {

  }

  ngOnInit() {
  }

}
