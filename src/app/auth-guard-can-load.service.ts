import { Injectable, Inject } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthorizationService } from './services/authorization/authorization.service';

@Injectable()
export class AuthGuardCanLoadService implements CanLoad {
  constructor(private router: Router, @Inject(AuthorizationService) private auth: AuthorizationService) {
  }

  canLoad(route: Route): boolean {
    if (!this.auth.isPermissibleEmail) {
      alert('You are not authorised to visit this page');
      return false;
    }
    return true;
  }
}
