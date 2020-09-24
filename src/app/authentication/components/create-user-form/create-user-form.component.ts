import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {
  createForm = this.fb.group({
    username: ['', [Validators.required, Validators.min(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]]
  });
  @Output() backToLogin = new EventEmitter();
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  createUser($event) {
    this.authenticationService.createUser(this.createForm.value)
      .subscribe(res => console.log(res));
  }

  backToLoginHandler() {
    this.backToLogin.emit();
  }
}
