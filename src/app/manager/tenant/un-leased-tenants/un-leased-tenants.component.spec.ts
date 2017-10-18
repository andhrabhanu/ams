import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnLeasedTenantsComponent } from './un-leased-tenants.component';

describe('UnLeasedTenantsComponent', () => {
  let component: UnLeasedTenantsComponent;
  let fixture: ComponentFixture<UnLeasedTenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnLeasedTenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnLeasedTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
