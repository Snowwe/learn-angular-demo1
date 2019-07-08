import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    emails = ['2@2', 's@s', 'hello@myFriend', 'run@run'];
    isPermissibleEmail: boolean;

    constructor() {
        this.isPermissibleEmail = !!localStorage.getItem('authData');
    }

    isVerify(incomingEmail: string): boolean {
        return (this.isPermissibleEmail = !!this.emails.filter(email => email === incomingEmail).length);
    }
}
