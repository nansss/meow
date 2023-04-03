import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginForm {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get form() {
    return this.loginForm;
  }
}
