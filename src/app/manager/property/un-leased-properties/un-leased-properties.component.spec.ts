import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnLeasedPropertiesComponent } from './un-leased-properties.component';

describe('UnLeasedPropertiesComponent', () => {
  let component: UnLeasedPropertiesComponent;
  let fixture: ComponentFixture<UnLeasedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnLeasedPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnLeasedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
