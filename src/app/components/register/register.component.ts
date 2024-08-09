import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";

export interface User {
  name: string,
  age: string,
  description: string,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy {
  usuario: User = {
    name: '',
    age: '',
    description: ''
  };

  private subscription: Subscription | undefined;

  constructor(private usersService: UsersService) {}

  save() {
    console.log(this.usuario);
    this.usersService.addUser(this.usuario);
  }

  ngOnInit(): void {
    console.log('Sección 2 inicializada');
  }

  ngAfterViewInit(): void {
    console.log('Sección 2 inicializó la vista');
  }

  ngOnDestroy(): void {
    console.log('Sección 2 destruido');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
