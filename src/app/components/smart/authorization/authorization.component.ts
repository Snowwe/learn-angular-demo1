import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent implements OnInit {
    authForm: FormGroup = new FormGroup({});
    hide = true;
    isLogin: boolean;

    constructor(private formBuilder: FormBuilder, private authService: AuthorizationService, private router: Router) {}

    ngOnInit() {
        this.initForm();
        this.isLogin = !!localStorage.getItem('authData');
    }

    private initForm(): void {
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(5)]],
        });
    }

    logIn(): void {
        if (this.authService.isVerify(this.authForm.value.email)) {
            localStorage.setItem('authData', `userName: ${this.authForm.value.email}`);
        } else {
            event.stopPropagation();
        }
    }

    logOut(): void {
        localStorage.removeItem('authData');
        this.authService.isPermissibleEmail = false;
        if (!this.router.navigate(['home'])) {
            this.router.navigate(['home']);
        }
    }

    getErrorMessage(): string {
        return this.authForm.get('email').hasError('required')
            ? 'You must enter a value'
            : this.authForm.get('email').hasError('email')
            ? 'Not a valid email'
            : '';
    }
}
