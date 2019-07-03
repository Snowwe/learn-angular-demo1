import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationService {
    emails = ['2@2', 's@s', 'hello@myFriend', 'run@run'];

    constructor() {}
    isVerify(incomingEmail) {
        if (!!this.emails.filter(email => email === incomingEmail).length) {
            console.log('you are verify');
            return true;
        }
    }
}
