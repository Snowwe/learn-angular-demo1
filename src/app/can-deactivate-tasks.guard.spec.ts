import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivateTasksGuard } from './can-deactivate-tasks.guard';

describe('CanDeactivateTasksGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CanDeactivateTasksGuard],
        });
    });

    it('should ...', inject([CanDeactivateTasksGuard], (guard: CanDeactivateTasksGuard) => {
        expect(guard).toBeTruthy();
    }));
});
