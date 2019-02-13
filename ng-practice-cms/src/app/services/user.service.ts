import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient

  ) { }

  register(user) {
    return this.http.post(AppSettings.API_BASE_URL+'/api/users/register', user);
  }

  login(user) {
    return this.http.post(AppSettings.API_BASE_URL+'/api/users/login', user);
  }
}
