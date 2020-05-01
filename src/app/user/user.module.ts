import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      CommonModule, 
      RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ]
})
export class UserModule {}
