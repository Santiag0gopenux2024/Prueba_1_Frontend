import { NgModule } from '@angular/core';

import {MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from "@angular/forms";


const components = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  FormsModule,

]

@NgModule({
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
  ],
  exports:[components]
})
export class MaterialModule { }
