import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';

import {MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
  ],
  exports: [
    Section1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
