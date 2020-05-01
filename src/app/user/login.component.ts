import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  public mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public login(formValues): void {
    this.authService.loginUser(formValues.userName, formValues.password);

    this.router.navigate(['events']);
  }

  public cancel(): void {
    this.router.navigate(['events']);
  }
}
