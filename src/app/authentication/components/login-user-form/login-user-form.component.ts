import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-user-form',
  templateUrl: './login-user-form.component.html',
  styleUrls: ['./login-user-form.component.scss']
})
export class LoginUserFormComponent implements OnInit {
  @Output() createUser = new EventEmitter();

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  loginUser($event) {
    console.log($event);
  }

  createUserHandler() {
    this.createUser.emit();
  }

}
