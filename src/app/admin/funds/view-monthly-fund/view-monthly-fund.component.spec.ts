import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyFundComponent } from './view-monthly-fund.component';

describe('ViewMonthlyFundComponent', () => {
  let component: ViewMonthlyFundComponent;
  let fixture: ComponentFixture<ViewMonthlyFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonthlyFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
