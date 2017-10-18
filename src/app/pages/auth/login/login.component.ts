import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../../services/data-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;

  constructor(public _dataService: DataServiceService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  doLogin(loginData) {

    const user = {username: loginData.username, password: loginData.password};


    this._dataService.login(user);
  }

  ngOnInit() {
  }

}
