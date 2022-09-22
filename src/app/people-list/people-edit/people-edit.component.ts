import { PeopleService } from './../people.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/shared/person.model';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit{

@ViewChild('nameInput') nameInputElementRef: ElementRef;
@ViewChild('emailInput') emailInputElementRef: ElementRef;

  constructor(private peopleSrv: PeopleService) { }

  ngOnInit(): void {
  }

  addNewPerson() {
    const nameVal = this.nameInputElementRef.nativeElement.value;
    const emailVal = this.emailInputElementRef.nativeElement.value;


    const person = new Person(nameVal, 333, emailVal);
    this.peopleSrv.addPerson(person);
  }

}
