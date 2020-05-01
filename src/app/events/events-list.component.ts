import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events: any;

  constructor(
    private eventService: EventService,
    private toster: ToastrService,
    private route : ActivatedRoute
  ) {}

  handleEventClicked(data): void {
    console.log('received: ', data);
  }

  handleThumbnailClick(eventName) {
    this.toster.success(eventName);
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
