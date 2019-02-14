import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl= environment.API_BASE_URL;
  constructor(
    private http: HttpClient

  ) { }

  register(user) {
    return this.http.post(this.baseUrl+'/api/users/register', user);
  }

  login(user) {
    return this.http.post(this.baseUrl+'/api/users/login', user);
  }
}
