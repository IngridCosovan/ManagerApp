import {Component, OnInit} from "@angular/core";
import {EventService, ISession} from "../shared";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../shared";

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';

  constructor(private eventService: EventService,
              private activateRouteService: ActivatedRoute) {
  }

  ngOnInit() {
    this.event = this.eventService.getSingleEvent(+this.activateRouteService.snapshot.params['id']);
    console.log(this.event);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    //cheama math.mx a tuturor idurilor sesiunilor din arrayul de sesiuni si returneaza maximul de sesiuni td
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }
}
