import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    isOpen = false;

    constructor() {}

    ngOnInit() {}

    viewAuthorization(): void {
        this.isOpen = !this.isOpen;
    }
    close(ev) {
        if (
            ev.target.textContent === 'LOGIN' &&
            ev.target.className === 'mat-button-wrapper'
        ) {
            console.log(ev);
            this.isOpen = false;
        }
    }
}
