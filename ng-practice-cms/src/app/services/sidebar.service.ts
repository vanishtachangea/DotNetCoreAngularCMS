import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private http:HttpClient
  ) { }

  getSidebar()
  {
    return this.http.get('http://localhost:51639/api/sidebar');
  }
  
  putSidebar(value)
  {
    return this.http.put('http://localhost:51639/api/sidebar/edit' , value);
  }
}


