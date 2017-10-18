import { Component, OnInit } from '@angular/core';
import {DataServiceService, User} from "../../../services/data-service.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = {username: '', password: '', email: ''};

  rForm: FormGroup;

  constructor(public _dataService: DataServiceService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }


  registerUser(data): void {
    this.user.username = data.username;
    this.user.email = data.email;
    this.user.password = data.password;
    //this._dataService.setUser({username: 'abc', password: 'abc', email: 'abc@abc.com'});

    this._dataService.setUser(this.user);
  }

  ngOnInit() {
  }

}

export interface User {
  username?: string;
  password?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  mobile?: string;
}
