import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeSalariesComponent } from './list-employee-salaries.component';

describe('ListEmployeeSalariesComponent', () => {
  let component: ListEmployeeSalariesComponent;
  let fixture: ComponentFixture<ListEmployeeSalariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeeSalariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
