import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
    authForm: FormGroup = new FormGroup({});
    hide = true;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(5)]],
        });
    }

    login() {
        console.log('login');
    }

    getErrorMessage() {
        return this.authForm.get('email').hasError('required')
            ? 'You must enter a value'
            : this.authForm.get('email').hasError('email')
            ? 'Not a valid email'
            : '';
    }
}
