import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _apiRoot = 'http://localhost:3000';
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(`${this._apiRoot}/courses`);
  }

  get(id): Observable<Object> {
    return this._http.get(`${this._apiRoot}/courses/${id}`);
  }

  edit(id, body): Observable<Object> {
    return this._http.put(`${this._apiRoot}/courses/${id}`, body);
  }

  delete(id): Observable<Object> {
    return this._http.delete(`${this._apiRoot}/courses/${id}`);
  }

  create(body): Observable<Object> {
    return this._http.post(`${this._apiRoot}/courses`, body);
  }

}
