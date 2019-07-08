import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    isOpen = false;
    clientName: string;

    constructor() {}

    ngOnInit() {      
    }

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

    isAuth(): boolean {
        if(!!localStorage.getItem('authData')){
            this.clientName = localStorage.getItem('authData').split(' ')[1];  
        }
        return !!localStorage.getItem('authData');
        
    }
}
