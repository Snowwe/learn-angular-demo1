import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from './services/authorization/authorization.service';

@Injectable({
    providedIn: 'root',
})
export class CanActivateTasksGuard implements CanActivate {
    constructor(@Inject(AuthorizationService) private auth: AuthorizationService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.isPermissibleEmail) {
            alert('You are not authorised to visit this page');
        }
        return this.auth.isPermissibleEmail;
    }
}
