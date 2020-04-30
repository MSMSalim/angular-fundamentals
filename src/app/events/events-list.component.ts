import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events: any[];

  constructor(private eventService: EventService) {}

  handleEventClicked(data): void {
    console.log('received: ', data);
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
