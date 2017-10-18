import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYearComponent } from './list-year.component';

describe('ListYearComponent', () => {
  let component: ListYearComponent;
  let fixture: ComponentFixture<ListYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
