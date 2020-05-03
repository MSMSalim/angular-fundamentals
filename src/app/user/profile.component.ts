import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.profileForm = this.createEmptyForm();
      this.router.navigate(['user/login']);
      return;
    }

    let currentUser = this.authService.getCurrentUser();

    this.firstName = new FormControl(currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);

    this.lastName = new FormControl(currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  saveProfile(formValues: any): void {
    if (!this.profileForm.valid) {
      return;
    }

    this.authService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );

    this.toastr.success('profile saved');
    //this.router.navigate(['events']);
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

  public validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  public validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
}
