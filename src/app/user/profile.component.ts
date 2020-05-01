import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.profileForm = this.createEmptyForm();
      this.router.navigate(['user/login']);
      return;
    }

    let currentUser = this.authService.getCurrentUser();

    let firstName = new FormControl(currentUser.firstName);
    let lastName = new FormControl(currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    });
  }

  saveProfile(formValues: any): void {
    this.authService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );

    this.router.navigate(['events']);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  private createEmptyForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });
  }
}
