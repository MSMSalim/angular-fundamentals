import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events: IEvent[];

  constructor(
    private eventService: EventService,
    private route : ActivatedRoute
  ) {}

  handleEventClicked(data): void {
    console.log('received: ', data);
  }

  ngOnInit(): void {
   /*
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
    */

    console.log('events from route', this.route.snapshot.data['events']);
    this.events = this.route.snapshot.data['events'];

  }
}
