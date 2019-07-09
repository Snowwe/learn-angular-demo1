import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksChildComponent } from './tasks-child.component';

describe('TasksChildComponent', () => {
  let component: TasksChildComponent;
  let fixture: ComponentFixture<TasksChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
