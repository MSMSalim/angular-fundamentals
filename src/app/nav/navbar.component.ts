import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public getCurrentUserName(): string {
    return this.authService.getCurrentUser().firstName;
  }
}
