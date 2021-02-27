import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCourseToUserComponent } from './assign-course-to-user.component';

describe('AssignCourseToUserComponent', () => {
  let component: AssignCourseToUserComponent;
  let fixture: ComponentFixture<AssignCourseToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignCourseToUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCourseToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
