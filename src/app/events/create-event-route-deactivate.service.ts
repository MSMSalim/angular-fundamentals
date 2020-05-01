import { ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared/event.service';
import { CreateEventComponent } from './create-event.component';

@Injectable({
  providedIn: 'root',
})
export class CreateEventRouteDeactivator
  implements CanDeactivate<CreateEventComponent> {
  public constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  canDeactivate(
    component: CreateEventComponent,
    route: ActivatedRouteSnapshot
  ) {
    if (component.isDirty) {
      return window.confirm(
        'you have not saved this event, do you really want to cancel?'
      );
    }

    return true;
  }
}
