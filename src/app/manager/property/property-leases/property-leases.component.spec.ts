import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLeasesComponent } from './property-leases.component';

describe('PropertyLeasesComponent', () => {
  let component: PropertyLeasesComponent;
  let fixture: ComponentFixture<PropertyLeasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyLeasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyLeasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
