import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../services/auth-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-z]+\d+.*$/),
    Validators.min(8),
  ]);
  loginForm: FormGroup = new FormGroup({
    login: this.login,
    password: this.password,
  });

  errors = {
    login: {
      required: 'Required'
    },
    password: {
      required: 'Required',
      pattern: 'Password must have at least one latin character and at list one digit',
      min: 'Password must have at least 8 characters length'
    }
  };

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  ngOnInit() {

  }

  isError(field) {
    return field.touched && field.invalid;
  }

  getErrorMessage(fieldName) {
    return this.errors[fieldName][Object.keys(this.loginForm.get(fieldName).errors)[0]];
  }

  submit() {
    console.log('submitted', this.loginForm);
    this._authService.signIn({login: this.login.value, password: this.password.value})
      .subscribe(data => {
        console.log(data);
      });
  }

}
