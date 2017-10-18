import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthComponent } from './add-month.component';

describe('AddMonthComponent', () => {
  let component: AddMonthComponent;
  let fixture: ComponentFixture<AddMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
