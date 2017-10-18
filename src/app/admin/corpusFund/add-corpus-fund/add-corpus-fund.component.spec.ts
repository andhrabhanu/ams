import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorpusFundComponent } from './add-corpus-fund.component';

describe('AddCorpusFundComponent', () => {
  let component: AddCorpusFundComponent;
  let fixture: ComponentFixture<AddCorpusFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCorpusFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorpusFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
