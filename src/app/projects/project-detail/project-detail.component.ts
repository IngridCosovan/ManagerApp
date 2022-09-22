import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

project: Project;
id: number;

  constructor(private projectSrv: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      // console.log('route id: ', this.id);
      this.project = this.projectSrv.getProjectByIndex(this.id);
    })

  }

  addPeopleToList() {
this.projectSrv.addAllPeople(this.project.persons);
  }

  editProject() {
this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
