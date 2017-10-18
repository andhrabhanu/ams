import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasePropertyComponent } from './lease-property.component';

describe('LeasePropertyComponent', () => {
  let component: LeasePropertyComponent;
  let fixture: ComponentFixture<LeasePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
