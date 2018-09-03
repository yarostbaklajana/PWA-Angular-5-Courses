import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth-service.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSignedIn: boolean;
  constructor(private _authService: AuthService) { }

  ngOnInit() {

  }

  logout() {
    this._authService.signOut();
  }

}
