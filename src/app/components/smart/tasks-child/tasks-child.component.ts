import { Component, OnInit } from '@angular/core';
import { ClientInfoService } from '../../../services/clientInfoService/client-info.service';
import { Observable } from 'rxjs';
import { IClient } from '../../../interfaces/client.interface';
import { select, Store } from '@ngrx/store';
import { selectGetClient } from '../../../store/client/client.selector';
import { IAppState } from '../../../store/app.state';

@Component({
    selector: 'app-tasks-child',
    templateUrl: './tasks-child.component.html',
    styleUrls: ['./tasks-child.component.scss'],
})
export class TasksChildComponent implements OnInit {
    client$: Observable<IClient>;
    clientId: string;

    constructor(private clientService: ClientInfoService, private store$: Store<IAppState>) {}

    ngOnInit() {
        this.client$ = this.store$.pipe(select(selectGetClient));
        this.clientId = '' + Math.floor(Math.random() * 10 + 1);
        this.clientService.getClientById$(this.clientId).subscribe();
    }
}
