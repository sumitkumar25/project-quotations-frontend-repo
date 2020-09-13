import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
export interface User {
  username: String,
  email: String,
  password: String
}
export enum UserUrls {
  create = 'api/user',
  login = 'api/user/login',
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  loginUser(loginForm: FormGroup) {
    return this.httpClient.post(`${UserUrls.login}`, loginForm);
  }

  constructor(private httpClient: HttpClient) { }

  createUser(arg: User) {
    return this.httpClient.post(`${UserUrls.create}`, arg)
  }
}
