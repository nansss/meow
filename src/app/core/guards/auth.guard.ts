import { Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class AuthGuard {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  canActivate(state: RouterStateSnapshot): Observable<boolean> {
    return this.authenticationService.getAccessTokenSubject().pipe(
      map((token) => {
        if (token) {
          return true;
        }

        this.router.navigate(['/login'], {
          queryParams: {
            returnUrl: state.url,
          },
        });

        return false;
      })
    );
  }
}
