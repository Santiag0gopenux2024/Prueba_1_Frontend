import { Component, Output, EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit, AfterViewInit, OnDestroy {

  @Output() newNameEvent = new EventEmitter<string>();
  @Output() newAgeEvent = new EventEmitter<string>();
  @Output() newDescriptionEvent = new EventEmitter<string>();

  private subscription: Subscription | undefined;

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

  onAddNewName(name: string): void {
    this.newNameEvent.emit(name)
  }

  onAddNewAge(age: string): void {
    this.newAgeEvent.emit(age)
  }

  onAddNewDescription(description: string): void {
    this.newDescriptionEvent.emit(description)
  }

}
