import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasedTenantsComponent } from './leased-tenants.component';

describe('LeasedTenantsComponent', () => {
  let component: LeasedTenantsComponent;
  let fixture: ComponentFixture<LeasedTenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasedTenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasedTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
