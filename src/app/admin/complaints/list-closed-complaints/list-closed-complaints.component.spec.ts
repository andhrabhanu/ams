import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClosedComplaintsComponent } from './list-closed-complaints.component';

describe('ListClosedComplaintsComponent', () => {
  let component: ListClosedComplaintsComponent;
  let fixture: ComponentFixture<ListClosedComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClosedComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClosedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
