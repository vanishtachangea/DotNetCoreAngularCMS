import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AppSettings } from '../../environments/environment';


@Injectable({
  providedIn: 'root'

})
export class PageService {

  constructor(private http: HttpClient) { }
  public pagesBS = new BehaviorSubject<Object>(null);

  getPages() {
    return this.http.get(AppSettings.API_BASE_URL+'/api/pages');
  }

  getPage(slug) {
    return this.http.get(AppSettings.API_BASE_URL+'/api/pages/' + slug);
  }
  postAddPage(value) {
    return this.http.post(AppSettings.API_BASE_URL+'/api/pages/create', value);
  }
  getEditPage(id) {
    return this.http.get(AppSettings.API_BASE_URL+'/api/pages/edit/' + id);
  }
  putEditPage(value) {
    return this.http.put(AppSettings.API_BASE_URL+'/api/pages/edit/' + value.id, value);
  }
  deletePage(id) {
    return this.http.delete(AppSettings.API_BASE_URL+'/api/pages/delete/' + id);
  }
} 
