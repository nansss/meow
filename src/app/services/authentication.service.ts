import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private readonly storageService: LocalStorageService) {
    this.at = this.storageService.getData('token', true) || null;
    this.accessToken$.next(this.at);
  }

  private readonly at: string | null;

  private accessToken$ = new ReplaySubject<string | null>(1);

  getAccessTokenSubject(): Observable<string | null> {
    return this.accessToken$.asObservable();
  }

  getToken(): string {
    return this.storageService.getData('token', true) || '';
  }

  setAuth(token: string) {
    this.storageService.setData('token', token, true);
    this.accessToken$.next(token);
  }
}
