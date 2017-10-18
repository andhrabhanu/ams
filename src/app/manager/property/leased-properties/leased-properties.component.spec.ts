import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasedPropertiesComponent } from './leased-properties.component';

describe('LeasedPropertiesComponent', () => {
  let component: LeasedPropertiesComponent;
  let fixture: ComponentFixture<LeasedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasedPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
