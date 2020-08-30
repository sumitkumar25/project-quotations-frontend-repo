import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {
  createForm = this.fb.group({
    username: ['', [Validators.required, Validators.min(5)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.min(6)]]
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
