import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ILabor, IPreviousLabor } from '../../../interfaces/labor.interface';
import { Observable } from 'rxjs';
import { IAppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { PreviousLaborService } from '../../../services/previousLabor/previous-labor.service';
import { selectGetLaborList } from '../../../store/client-labor/client-labor.selector';

@Component({
    selector: 'app-previous-labor',
    templateUrl: './previous-labor.component.html',
    styleUrls: ['./previous-labor.component.scss'],
})
export class PreviousLaborComponent implements OnInit {
    labor$: Observable<IPreviousLabor[]>;
    form: FormGroup = new FormGroup({});
    activeCall = false;
    phoneType = ['сотовый', 'рабочий', 'домашний', 'главный'];
    constructor(
        private store$: Store<IAppState>,
        private formBuilder: FormBuilder,
        private previousLaborService: PreviousLaborService,
    ) {}

    ngOnInit() {
        this.labor$ = this.fillForm();
    }

    private fillForm(): Observable<IPreviousLabor[]> {
        return this.store$.select(selectGetLaborList).pipe(
            filter((labors: ILabor[]) => !!labors),
            switchMap(() =>
                this.previousLaborService.getLaborList$().pipe(
                  tap(l => console.log(l)),
                    filter((labors: ILabor[]) => !!labors),
                    map((labors: ILabor[]) =>
                        labors.map(
                            (labor: ILabor): IPreviousLabor => {
                                return {
                                    id: labor.id,
                                    workPhone: labor.workPhone,
                                    position: labor.position,
                                    phoneType: this.phoneType,
                                    startDate: new Date(labor.startDate).toLocaleString(),
                                };
                            },
                        ),
                    ),
                    tap(l => console.log(l)),
                ),
            ),
        );
    }

    callToClient(): void {
        this.activeCall = !this.activeCall;
        console.log(`Звонок на номер ${this.form.value.workPhone}`);
    }

    callEnd(): void {
        this.activeCall = !this.activeCall;
    }
}
