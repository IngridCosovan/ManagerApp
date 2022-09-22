import { PeopleService } from './../people-list/people.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../shared/person.model";
import { Project } from "./project.model";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private projects: Project[] = [
        new Project(
          'Project One',
        'Project One description testing...',
        [
          new Person('Dan', 100, 'dan@d.comp'),
          new Person('Cristina', 101, 'cris@c.com')
        ]),
        new Project(
          'Project Two',
        'Project Two description testing...',
        [
          new Person('Adriana', 35, 'adriana@a.comp'),
          new Person('Alex', 42, 'alex@a.com')
        ]),
      ];

selectedProject = new EventEmitter<Project>();

    constructor(private peopleSrv: PeopleService) {
    }

    getAllProjects(){
        return this.projects.map(p => p);
    }

    getProjectByIndex(index: number) {
      return this.projects[index];

    }

    addAllPeople(persons: Person[]) {
this.peopleSrv.addGroupToList(persons);
    }
}
