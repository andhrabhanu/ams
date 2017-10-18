import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypeListComponent } from './member-type-list.component';

describe('MemberTypeListComponent', () => {
  let component: MemberTypeListComponent;
  let fixture: ComponentFixture<MemberTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
