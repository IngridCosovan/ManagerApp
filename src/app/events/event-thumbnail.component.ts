import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IEvent} from "./shared";

@Component({
  selector: 'event-thumbnail',
  template: `
    <div appCustomBackground [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2 [ngStyle]="getStyle()">{{event.name | uppercase}}</h2>
      <div>Data: {{event.date | date:'shortDate'}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{event.price | currency:'USD'}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
      <button (click)="handleClickMe()">Click me</button>
    </div>`,
  styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter;
  someProperty: any = "some value";

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
  //input parameters sunt folositi cand construim un copil si vrem sa ii dam acelui copil datele
  //output folosit ca raspuns la un event cand o componenta copil, ca printele sa primeasca informatie cand se intampla
  // ceva in copil, ca un click spre exemplu.

  getStartTimeClass() {
    const  isEarlyStart = this.event.time === '8:00 am';
    return {eventTime: isEarlyStart};
  }

  getStyle(): any {
    if (this.event.name.startsWith('A')) {
      return {color: '#f7ddff'};
    }
  }

  logFoo(){
    console.log("foo")
  }
}
