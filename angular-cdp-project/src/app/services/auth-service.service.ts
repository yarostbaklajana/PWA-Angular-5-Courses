import { Injectable } from '@angular/core';
//import {Observable, Subject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private _userSubject: Subject<IUser> = new Subject(null);
  // private _userObservable: Observable<IUser> = this._userSubject.asObservable();
  // private _apiRoot = '/api/';

  constructor(private _cookie: CookieService) { }

  fetchUser() {
    //return this._http.get(`${this._apiRoot}/user`);
  }

  getToken(): string {
    return this._cookie.get('koa:sess');
  }

  getUser() {

  }

  signOut() {

  }

  isAutorized() {
    return !!this._cookie.get('koa:sess');
  }
}
