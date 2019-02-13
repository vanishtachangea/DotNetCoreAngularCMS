import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AppSettings } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private http: HttpClient
  ) { }

  getSidebar() {
    return this.http.get(AppSettings.API_BASE_URL+'/api/sidebar');
  }

  putSidebar(value) {
    return this.http.put(AppSettings.API_BASE_URL+'/api/sidebar/edit', value);
  }
}


