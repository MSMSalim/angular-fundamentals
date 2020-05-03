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
import { SimpleModalComponent } from './common/simple-modal.component';
import { FormsModule } from '@angular/forms';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

let jQuery = window['$'];

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
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  bootstrap: [EventsAppComponent],
  providers: [{ provide: JQ_TOKEN, useValue: jQuery }],
})
export class AppModule {}
