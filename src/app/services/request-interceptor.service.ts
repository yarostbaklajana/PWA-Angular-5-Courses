import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';
@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  constructor(public _auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(this._auth.getToken());
    request = request.clone({
      setHeaders: {
        Authorization: `${this._auth.getToken()}`
      }
    });
    return next.handle(request);
  }
}
