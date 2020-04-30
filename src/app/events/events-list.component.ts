import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events: any[];

  constructor(
    private eventService: EventService,
    private toster: ToastrService
  ) {}

  handleEventClicked(data): void {
    console.log('received: ', data);
  }

  handleThumbnailClick(eventName) {
    this.toster.success(eventName);
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
