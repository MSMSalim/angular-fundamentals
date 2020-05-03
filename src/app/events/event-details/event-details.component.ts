import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;
  public filterBy: string = 'all';
  public sortBy: string = 'name';

  constructor(private eventService: EventService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.forEach((params : Params) => {
      this.event = this.eventService.getEvent(+params['id']);
    })
   
  }
}
