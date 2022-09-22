import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../shared/person.model";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    private people: Person[] = [
        new Person('Popescu', 512, 'popescu@companie.ro'),
        new Person('Ionescu', 515, 'ionescu@companie.ro'),
        new Person('Anton', 413, 'anton@companie.ro'),
      ];

      peopleListChanged = new EventEmitter<Person[]>();

    constructor() {

    }

    getAllPersons() {
        //return copie a vectorului.
        return this.people.map(p => p);
    }

    addPerson(person: Person) {
        this.people.push(person);
        this.peopleListChanged.emit(this.people.map(p => p));
    }

    addGroupToList(persons:Person[]) {
      this.people.push(...persons);
      //spread operator - ...
      this.peopleListChanged.emit(this.people.map(p => p));
    }
}
