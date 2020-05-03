import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from '../routes';
import { PageNotFoundComponent } from './errors/page-not-found.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  SessionListComponent,
  DurationPipe,
} from './events/index';

import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { TOASTR_TOKEN } from './common/toastr.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
