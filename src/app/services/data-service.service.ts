import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class DataServiceService {
  public isLoggedin = false;
  private users: User[] = new Array();
  constructor( private router: Router) {
    this.dataSeed();
  }

  dataSeed(): void {
    const user: User = {
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123',
      lastName: 'Admin',
      firstName: 'admin',
      mobile: '0293837847'
    };
    this.users[0] = user;
  }

  getUsers(): User[] {
    return this.users;
  }

  setUser(user: User): void {
     this.users.push(user);
  }

  login(userData) {
    this.isLoggedin = this.checkUserPassMatch(userData);
    if (this.isLoggedin){
      this.router.navigateByUrl('/');
    }
  }

  private checkUserPassMatch(userData): boolean {
    var isFound: boolean = false;
      if (userData.username.search('@.') !== -1) {
        for ( let user of this.users ) {
          if (user.email === userData.email && user.password === userData.password) {
            isFound =  true;
          }
        }
      }else {
        for ( let user of this.users ) {
          if (user.username === userData.username && user.password === userData.password) {
            isFound = true;
          }
        }
      }

      return isFound;

  }

  checkAuth() {
    if (!this.isLoggedin) {
      this.router.navigateByUrl('/');
    }
  }

}


export interface User {
  username: string;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
  mobile?: string;
}
