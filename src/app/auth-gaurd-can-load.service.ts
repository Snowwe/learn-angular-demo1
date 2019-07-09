import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable()
export class AuthGaurdCanLoadService implements CanLoad {
    constructor(private router: Router) {}

    canLoad(route: Route): boolean {
        const url: string = route.path;
        console.log('Url:' + url);
        if (url === 'taskchild') {
            alert('You are not authorised to visit this page');
            return false;
        }
        return true;
    }
}
