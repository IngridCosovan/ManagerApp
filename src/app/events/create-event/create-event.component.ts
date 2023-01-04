import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],

})
export class CreateEventComponent {
  name: string;
  date: Date;
  time: number;
  price: number;
  address: string;
  city: string;
  country: string;
  onlineUrl: string;
  imageUrl: string;
  isDirty: boolean = true;

  constructor(private router: Router,
              private eventService: EventService) {
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
