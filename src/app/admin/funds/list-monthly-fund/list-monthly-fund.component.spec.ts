import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonthlyFundComponent } from './list-monthly-fund.component';

describe('ListMonthlyFundComponent', () => {
  let component: ListMonthlyFundComponent;
  let fixture: ComponentFixture<ListMonthlyFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMonthlyFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMonthlyFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
