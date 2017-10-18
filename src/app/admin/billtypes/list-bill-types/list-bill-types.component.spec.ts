import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBillTypesComponent } from './list-bill-types.component';

describe('ListBillTypesComponent', () => {
  let component: ListBillTypesComponent;
  let fixture: ComponentFixture<ListBillTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBillTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBillTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
