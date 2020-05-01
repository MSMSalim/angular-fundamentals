import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { Routes } from '@angular/router';
import { CreateEventComponent } from './app/events/create-event.component';
import { PageNotFoundComponent } from './app/errors/page-not-found.component';
import { EventRouteActivator } from './app/events/event-details/event-route-activator.service';
import { CreateEventRouteDeactivator } from './app/events/create-event-route-deactivate.service';
import { EventListResolver } from './app/events/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [CreateEventRouteDeactivator],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
