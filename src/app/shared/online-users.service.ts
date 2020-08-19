import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineUsersService {
  constructor(private http: HttpClient) {}

  // private allUsers: User[] = [];
  // private usersUpdated = new Subject<User[]>();

  // getUsers() {
  //   this.http
  //     .get<{ message: string; users: User[] }>(
  //       'http://localhost:3000/api/users'
  //     )
  //     .subscribe(usersData => {
  //       this.allUsers = usersData.users;
  //       this.usersUpdated.next([...this.allUsers]);
  //     });
  // }

  // getUsersUpdateListener() {
  //   return this.usersUpdated.asObservable();
  // }

  allUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
