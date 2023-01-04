import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: [`
    .session {
      background-color: orange;
      margin-top: 1.5rem
    }`]
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
//facem un duplicat al sesiunilor
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter
      })
    }
  }

  //aceasta metoda va fi chemata de fiecare data cand variabila de la input primeste o noua valoare
  //cea de la filterBy
}
