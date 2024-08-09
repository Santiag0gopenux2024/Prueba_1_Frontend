import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { User } from '../register/register.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private subscription: Subscription | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.subscription = this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
