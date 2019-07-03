import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
    authForm: FormGroup = new FormGroup({});
    hide = true;

    constructor(private formBuilder: FormBuilder, private authService: AuthorizationService) {}

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
        if (this.authService.isVerify(this.authForm.value.email)) {
            localStorage.setItem('uathData', `userName: ${this.authForm.value.email}`);
        }
    }

    getErrorMessage() {
        return this.authForm.get('email').hasError('required')
            ? 'You must enter a value'
            : this.authForm.get('email').hasError('email')
            ? 'Not a valid email'
            : '';
    }
}
