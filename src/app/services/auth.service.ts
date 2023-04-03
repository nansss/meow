import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environment/environment';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {
  token = '';

  constructor(private http: HttpClient, private readonly authenticationService: AuthenticationService) {
    super();
    this.token = this.authenticationService.getToken();
  }

  login(form: any) {
    return form.login === environment.login && form.password === environment.password;
  }
}
