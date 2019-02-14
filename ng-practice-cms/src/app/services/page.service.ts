import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment  } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
  

})
export class PageService {
  baseUrl= environment.API_BASE_URL;
  constructor(private http: HttpClient) { }
  public pagesBS = new BehaviorSubject<Object>(null);

  getPages() {
    return this.http.get(this.baseUrl+'/api/pages');
  }

  getPage(slug) {
    return this.http.get(this.baseUrl+'/api/pages/' + slug);
  }
  postAddPage(value) {
    return this.http.post(this.baseUrl+'/api/pages/create', value);
  }
  getEditPage(id) {
    return this.http.get(this.baseUrl+'/api/pages/edit/' + id);
  }
  putEditPage(value) {
    return this.http.put(this.baseUrl+'/api/pages/edit/' + value.id, value);
  }
  deletePage(id) {
    return this.http.delete(this.baseUrl+'/api/pages/delete/' + id);
  }
} 
