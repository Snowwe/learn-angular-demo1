import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { AuthorizationService } from './services/authorization/authorization.service';

@Injectable({
    providedIn: 'root',
})
export class CanActivateTasksGuard implements CanActivate {
    constructor(@Inject(AuthorizationService) private auth: AuthorizationService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.auth.isPermissibleEmail;
    }
    // canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //     return this.canActivate(next, state);
    // }
}
