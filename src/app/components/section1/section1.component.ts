import { Component, OnChanges, SimpleChanges } from '@angular/core';

interface  User {
  name: string;
  age: string;
  description: string;
}

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnChanges {

  receivedName: string = '';
  receivedAge: string = '';
  receivedDescription: string = '';

  users: User[] = [
    {
      name :'',
      age: '',
      description: ''
    }
  ]

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Sección 1 ha detectado cambios', changes);
  }

  onNewNameReceived(name: string): void {
    this.receivedName = name;
  }

  onNewAgeReceived(age: string): void {
    this.receivedAge = age;
  }

  onNewDescriptionReceived(description: string): void {
    this.receivedDescription = description;
  }
}
