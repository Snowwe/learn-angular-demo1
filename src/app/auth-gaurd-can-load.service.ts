import { Injectable, Inject } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthorizationService } from './services/authorization/authorization.service';

@Injectable()
export class AuthGaurdCanLoadService implements CanLoad {
    constructor(private router: Router, @Inject(AuthorizationService) private auth: AuthorizationService) {}

    canLoad(route: Route): boolean {
        const url: string = route.path;
        // console.log('text ' + localStorage.getItem('authData'));
        // console.log('text2 ' + !!this.auth.isPermissibleEmail);
        // if (!localStorage.getItem('authData'))
        if (!this.auth.isPermissibleEmail) {
            alert('You are not authorised to visit this page');
            return false;
        } else {
            return true;
        }
        // return !!this.auth.isPermissibleEmail;
    }
}
