import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { LoginUserFormComponent } from './components/login-user-form/login-user-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    CreateUserFormComponent,
    LoginUserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
