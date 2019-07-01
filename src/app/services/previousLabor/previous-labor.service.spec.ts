import { TestBed } from '@angular/core/testing';

import { PreviousLaborService } from './previous-labor.service';

describe('PreviousLaborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviousLaborService = TestBed.get(PreviousLaborService);
    expect(service).toBeTruthy();
  });
});
