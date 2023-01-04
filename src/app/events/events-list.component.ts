import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {EventService} from './shared';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared';

@Component({
  // selector: 'event-list', pt ca avem route
  template: `
    <div class="content">
      <h1>Upcoming Angular events</h1>
      <hr>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <!--      <event-thumbnail #thumbnail [event]="eventOne" (eventClick)="handleEventClicked($event)"></event-thumbnail>-->
          <event-thumbnail #thumbnail [event]="event" (eventClick)="handleEventClicked($event)"></event-thumbnail>
        </div>
      </div>
      <!--      template variables&ndash, #ceva e reference variable -->
      <!--      folosit pentru a accesa metode si proprietati publici a copilului-, se foloseste sa chemi metode
      pe componenta copil sau sa bind to data pe o componenta copil-->
    </div>
  `,
  styleUrls: ['./events-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class EventsListComponent implements OnInit{
  events: IEvent[];

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data: any) {
    console.log('received: ' + data);
  }

}
