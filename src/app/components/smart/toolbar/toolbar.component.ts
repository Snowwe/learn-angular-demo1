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
    close(ev) {
        if (
            (ev.target.textContent === 'LOGIN' || ev.target.textContent === 'Cancel') &&
            (ev.target.className === 'mat-button-wrapper' || ev.target.localName === 'button')
        ) {
            this.isOpen = false;
        }
    }
}
