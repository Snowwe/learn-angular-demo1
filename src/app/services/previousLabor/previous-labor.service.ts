import { Injectable } from '@angular/core';
import { delay, filter, switchMap, take, tap } from 'rxjs/operators';
import { GetLabors, IsLoadingLabor } from '../../store/client-labor/client-labor.action';
import { select, Store } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';
import { selectGetLaborList, selectLoadingStatus } from '../../store/client-labor/client-labor.selector';
import { Observable } from 'rxjs';
import { API } from '../API';
import { IAppState } from '../../store/app.state';
import { HttpClient } from '@angular/common/http';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';

@Injectable({
    providedIn: 'root',
})
export class PreviousLaborService {
    constructor(private httpClient: HttpClient, private apiUrl: API, private store$: Store<IAppState>) {}

    getLaborList$(): Observable<ILabor[]> {
        const sourceLabor$: Observable<ILabor[]> = this.store$.select(selectGetLaborList).pipe(delay(100));

        sourceLabor$.pipe(onceRunOrCatch(this.fetchAndSave$())).subscribe();

        return sourceLabor$;
    }

    fetchAndSave$(): Observable<ILabor[]> {
        return this.store$.pipe(
            select(selectLoadingStatus),
            take(1),
            filter((isLoading: boolean) => !isLoading),
            switchMap(() => {
                this.store$.dispatch(new IsLoadingLabor(true));
                return this.httpClient.get<ILabor[]>(`${this.apiUrl.LABOR_URL}`).pipe(
                    tap((labor: ILabor[]) => {
                        this.store$.dispatch(new GetLabors({ ...labor }));
                        this.store$.dispatch(new IsLoadingLabor(false));
                    }),
                );
            }),
        );
    }
}
