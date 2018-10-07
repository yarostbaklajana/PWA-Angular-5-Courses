import { Injectable } from '@angular/core';
//import {Observable, Subject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private _userSubject: Subject<IUser> = new Subject(null);
  // private _userObservable: Observable<IUser> = this._userSubject.asObservable();
  // private _apiRoot = '/api/';
  private _apiRoot = 'http://localhost:3000';

  constructor(private _cookie: CookieService,
  private _http: HttpClient) { }


  getToken(): string {
    return this._cookie.get('koa:sess');
  }

  getUser() {

  }

  signIn(params) {
    return this._http.get(`${this._apiRoot}/login`, { params });
  }

  signOut() {

  }

  isAutorized() {
    return !!this._cookie.get('koa:sess');
  }
}
