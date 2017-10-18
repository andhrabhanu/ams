import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMonthlyFundComponent } from './check-monthly-fund.component';

describe('CheckMonthlyFundComponent', () => {
  let component: CheckMonthlyFundComponent;
  let fixture: ComponentFixture<CheckMonthlyFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckMonthlyFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMonthlyFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
