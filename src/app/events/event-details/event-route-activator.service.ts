import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivator implements CanActivate {
  public constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    let eventId = +route.params['id'];
    let event = this.eventService.getEvent(eventId);

    if (!event) {
      this.router.navigate(['/404']);
    }

    return true;
  }
}
