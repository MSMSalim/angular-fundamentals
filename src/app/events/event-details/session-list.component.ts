import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnChanges, OnInit {
  @Input() public sessions: ISession[];
  @Input() public filterBy: string;
  public visibleSessions: ISession[];

  constructor() {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLocaleLowerCase() === filterBy;
      });
    }
  }

  ngOnInit(): void {}
}
