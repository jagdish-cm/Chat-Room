import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  user: User = {
    id: 'asdhfh344',
    username: 'Tushar',
    age: 21,
    country: 'AUS',
    gender: 'female'
  };

  getUser() {
    return this.user;
  }

  addUser(nuser: User) {
    const newuser: User = {
      id: null,
      username: nuser.username,
      age: nuser.age,
      country: nuser.country,
      gender: nuser.gender
    };
    this.user = newuser;
    console.log(this.user);
  }

  // newUser = new Subject<User>();
}
