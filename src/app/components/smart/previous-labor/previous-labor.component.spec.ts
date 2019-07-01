import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousLaborComponent } from './previous-labor.component';

describe('PreviousLaborComponent', () => {
  let component: PreviousLaborComponent;
  let fixture: ComponentFixture<PreviousLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousLaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
