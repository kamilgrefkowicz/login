import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  emailValidated = true;
  passwordValidated = true;
  processingLogin = false;

  @Output()
  validatedUserData = new EventEmitter<{ email: string; password: string }>();

  constructor() {}

  ngOnInit(): void {}

  inputEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
    this.clearValidation();
  }
  inputPassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
    this.clearValidation();
  }

  clearValidation() {
    this.emailValidated = true;
    this.passwordValidated = true;
  }

  attemptLogin() {
    if (this.inputIsValid()) {
      this.validatedUserData.emit({
        email: this.email,
        password: this.password,
      });
    }
  }

  inputIsValid() {
    this.validatePassword();
    this.validateEmail();
    return this.passwordValidated && this.emailValidated;
  }
  validatePassword() {
    if (this.password.length < 6) {
      this.passwordValidated = false;
    }
  }
  validateEmail() {
    let emailRegex = /^\S+@\S+\.\S+$/;
    if (!this.email.match(emailRegex)) {
      this.emailValidated = false;
    }
  }
}
