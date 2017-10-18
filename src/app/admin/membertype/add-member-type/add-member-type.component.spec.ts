import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberTypeComponent } from './add-member-type.component';

describe('AddMemberTypeComponent', () => {
  let component: AddMemberTypeComponent;
  let fixture: ComponentFixture<AddMemberTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemberTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
