import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillTypeComponent } from './add-bill-type.component';

describe('AddBillTypeComponent', () => {
  let component: AddBillTypeComponent;
  let fixture: ComponentFixture<AddBillTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBillTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
