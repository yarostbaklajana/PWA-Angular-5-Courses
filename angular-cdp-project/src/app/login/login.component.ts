import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  errors = {
    login: "Required",
    password: "Required"
  }

  constructor() { }

  ngOnInit() {

  }

  isError(fildName) {
    return this.loginForm.get(fildName).touched && this.loginForm.get(fildName).invalid;
  }

  submit() {
    console.log('submitted', this.loginForm);
  }

}
