import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginForm } from '../../forms/login.form';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  loginForm: LoginForm;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authenticateService: AuthenticationService
  ) {
    this.loginForm = new LoginForm(this.fb);
  }

  onSubmit(form: FormGroup) {
    if (this.authService.login(form.getRawValue())) {
      this.authenticateService.setAuth('true');
      this.router.navigateByUrl('/');
    } else {
      this.showError = true;
    }
  }
}
