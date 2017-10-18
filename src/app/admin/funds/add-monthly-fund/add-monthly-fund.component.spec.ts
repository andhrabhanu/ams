import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyFundComponent } from './add-monthly-fund.component';

describe('AddMonthlyFundComponent', () => {
  let component: AddMonthlyFundComponent;
  let fixture: ComponentFixture<AddMonthlyFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonthlyFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonthlyFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
