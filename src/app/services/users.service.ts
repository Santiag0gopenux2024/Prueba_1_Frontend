import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>(this.users);

  constructor() {}

  addUser(usuario: User) {
    this.users.push(usuario);
    this.usersSubject.next(this.users);
  }

  getUsers() {
    return this.usersSubject.asObservable();
  }
}
