import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    isOpen = false;

    constructor(private authService: AuthorizationService) {}

    ngOnInit() {}

    viewAuthorization(): void {
        this.isOpen = !this.isOpen;
    }

    closeAuthForm(event): void {
        if (
            (event.target.textContent === 'LOGIN' ||
                event.target.textContent === 'LOG OUT' ||
                event.target.textContent === 'Cancel') &&
            (event.target.className === 'mat-button-wrapper' || event.target.localName === 'button')
        ) {
            this.isOpen = false;
        }
    }

    ifAuth(): boolean {
        return !!localStorage.getItem('authData');
    }
}
