import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceResourceComponent } from './add-service-resource.component';

describe('AddServiceResourceComponent', () => {
  let component: AddServiceResourceComponent;
  let fixture: ComponentFixture<AddServiceResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
