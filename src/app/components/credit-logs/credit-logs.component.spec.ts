import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLogsComponent } from './credit-logs.component';

describe('CreditLogsComponent', () => {
  let component: CreditLogsComponent;
  let fixture: ComponentFixture<CreditLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
