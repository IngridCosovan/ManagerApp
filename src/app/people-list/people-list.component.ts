import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[];

condition = false;

value = 20;

  constructor(private peopleSrv: PeopleService) { }

  ngOnInit(): void {
    this.people = this.peopleSrv.getAllPersons();
    this.peopleSrv.peopleListChanged.subscribe((list:Person[]) => {this.people = list;});
  }
}
