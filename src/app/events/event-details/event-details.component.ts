import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  public event: any;

  constructor(private eventService: EventService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    let eventId = +this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(eventId);
  }
}