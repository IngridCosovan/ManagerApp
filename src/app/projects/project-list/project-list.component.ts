import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
projects: Project[];

  constructor(private projectSrv: ProjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projects = this.projectSrv.getAllProjects();
  }

  newProject() {
// this.router.navigate(['/projects/new']);
this.router.navigate(['new'], { relativeTo: this.route});
  }
}
