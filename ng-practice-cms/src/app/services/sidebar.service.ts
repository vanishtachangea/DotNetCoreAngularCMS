import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment  } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  baseUrl= environment.API_BASE_URL;
  constructor(
    private http: HttpClient
  ) { }

  getSidebar() {
    return this.http.get(this.baseUrl+'/api/sidebar');
  }

  putSidebar(value) {
    return this.http.put(this.baseUrl+'/api/sidebar/edit', value);
  }
}


