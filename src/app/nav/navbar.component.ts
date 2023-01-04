import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {EventService, ISession} from "../events";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class NavbarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(public authService: AuthService,
  private eventService: EventService
) {
}

searchSession(searchTerm: any)
{
  this.eventService.searchSessions(searchTerm).subscribe(sessions => {
    this.foundSessions = sessions;
    console.log(this.foundSessions);
  })
}

}
