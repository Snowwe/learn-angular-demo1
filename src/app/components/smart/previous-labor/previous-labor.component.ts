import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ILabor, IPreviousLabor } from '../../../interfaces/labor.interface';
import { Observable } from 'rxjs';
import { IAppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs/operators';
import { PreviousLaborService } from '../../../services/previousLabor/previous-labor.service';
import { selectGetLaborList } from '../../../store/client-labor/client-labor.selector';

@Component({
    selector: 'app-previous-labor',
    templateUrl: './previous-labor.component.html',
    styleUrls: ['./previous-labor.component.scss'],
})
export class PreviousLaborComponent implements OnInit {
    labor$: Observable<IPreviousLabor[]>;
    activeCall = false;
    currentCallButton = document.getElementsByClassName('doCall');
    currentCallID: number;
    phoneTypes = ['type 1', 'type 2', 'type 3', 'type 4'];

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
                    filter((labors: ILabor[]) => !!labors),
                    map((labors: ILabor[]) =>
                        labors.map(
                            (labor: ILabor): IPreviousLabor => {
                                if (!this.phoneTypes.filter(type => type === labor.type).length) {
                                    this.phoneTypes = [...this.phoneTypes, labor.type];
                                }
                                return {
                                    id: labor.id,
                                    workPhone: labor.workPhone,
                                    position: labor.position,
                                    phoneType: labor.type,
                                    startDate: new Date(labor.startDate).toLocaleString(),
                                };
                            },
                        ),
                    ),
                ),
            ),
        );
    }

    callToClient(currentPhoneNumber: string, selectedIndex: number): void {
        if (!this.activeCall) {
            this.activeCall = !this.activeCall;
            console.log(`Звонок на номер ${currentPhoneNumber}`);
            this.currentCallButton[selectedIndex].innerHTML = 'call_end';
            this.currentCallID = selectedIndex;
        } else {
            this.activeCall = !confirm('Завершить текущий звонок?');
            this.currentCallButton.item(this.currentCallID).innerHTML = 'call';
        }
    }
}
