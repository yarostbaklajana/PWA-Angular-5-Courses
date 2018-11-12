import {Injectable} from '@angular/core';
import {AuthService} from './services/auth-service.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OnlyAuthorizedUserAllowedGuardService implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) {
  };

  canActivate() {
    if (this._authService.getToken()) {
      return true;
    } else {
      // this._router.navigate(['/login'])
      // return false;
    }
  }
}
