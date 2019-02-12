import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }
  public pagesBS = new BehaviorSubject<Object>(null);

  getPages()
  {
    return this.http.get('http://localhost:51639/api/pages');
  }

  getPage(slug)
  {
    return this.http.get('http://localhost:51639/api/pages/' + slug);
  }
  postAddPage(value)
  {
    return this.http.post('http://localhost:51639/api/pages/create' , value);
  }
  getEditPage(id)
  {
    return this.http.get('http://localhost:51639/api/pages/edit/' + id);
  }
  putEditPage(value)
  {
    return this.http.put('http://localhost:51639/api/pages/edit/' + value.id, value);
  }
  deletePage(id)
  {
    return this.http.delete('http://localhost:51639/api/pages/delete/' + id);
  }
} 
