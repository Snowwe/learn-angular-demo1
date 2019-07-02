import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
    authForm: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.initForm();
    }

    private initForm(): void {
        this.authForm = this.formBuilder.group({
            email: [null, Validators.required, Validators.email],
            password: [null, Validators.required, Validators.minLength(5)],
        });
    }
}
