import { TestBed, inject } from '@angular/core/testing';

import { CanActivateTasksGuard } from './can-activate-tasks.guard';

describe('CanActivateTasksGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateTasksGuard]
    });
  });

  it('should ...', inject([CanActivateTasksGuard], (guard: CanActivateTasksGuard) => {
    expect(guard).toBeTruthy();
  }));
});
