import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IClient } from 'src/app/interfaces/client.interface';
import { API } from '../API';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    constructor(private httpClient: HttpClient, private config: API) {}

    getUser(clientId): Observable<IClient> {
        return this.httpClient.get<IClient>(`${this.config.CLIENT_URL}/${clientId}`).pipe(
            catchError(err => {
                console.error(err.message);
                return throwError(`this user does'n exist`);
            }),
        );
    }
}
