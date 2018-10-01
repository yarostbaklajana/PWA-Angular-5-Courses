import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth-service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {

    this.isLoggedIn = this._authService.isAutorized();
    // this._authService.getUser().subscribe(userData => {
    //   console.log(userData);
    // });
  }

  logout() {
    this._authService.signOut();
  }

}
