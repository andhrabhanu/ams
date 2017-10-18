import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeSalaryComponent } from './add-employee-salary.component';

describe('AddEmployeeSalaryComponent', () => {
  let component: AddEmployeeSalaryComponent;
  let fixture: ComponentFixture<AddEmployeeSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
