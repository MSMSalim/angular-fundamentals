import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public searchTerm: string = "";
  public foundSession : ISession[];

  constructor(private authService: AuthService, private eventService : EventService) {}

  ngOnInit(): void {}

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public getCurrentUserName(): string {
    return this.authService.getCurrentUser().firstName;
  }

  public searchSessions(searchTerm): void {
    console.log(searchTerm);
    
    this.eventService.searchSessions(searchTerm)
    .subscribe((sessions)=> {
      this.foundSession = sessions;
      console.log(this.foundSession);
    });
  }
}
