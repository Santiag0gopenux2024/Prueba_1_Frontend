import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RegisterComponent} from "./components/register/register.component";
import {ListComponent} from "./components/list/list.component";

import { UsersService } from './services/users.service';
import {MaterialModule} from "./material/material.module";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
