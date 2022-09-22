import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectSelected: Project | undefined;

  constructor(private projectSrv: ProjectService) { }

  ngOnInit(): void {
    // this.projectSrv.selectedProject.subscribe((project:Project) => { this.projectSelected = project;});
  }

}
