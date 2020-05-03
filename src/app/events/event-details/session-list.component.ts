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
  @Input() public sortBy: string;

  public visibleSessions: ISession[];

  constructor() {}

  ngOnChanges(): void {
    console.log(this.sortBy);

    if (this.sessions) {
      this.filterSessions(this.filterBy);

      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
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

function sortByNameAsc(session1: ISession, session2: ISession) {
  if (session1.name > session2.name) return 1;
  else if (session1.name === session2.name) return 0;
  else return -1;
}

function sortByVotesDesc(session1: ISession, session2: ISession) {
  return session2.voters.length - session1.voters.length;
}
