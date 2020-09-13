import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface User {
  username: String,
  email: String,
  password: String
}
export enum UserUrls {
  create = 'api/user'
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  createUser(arg: User) {
    return this.httpClient.post(`${UserUrls.create}`, arg)
  }
}
