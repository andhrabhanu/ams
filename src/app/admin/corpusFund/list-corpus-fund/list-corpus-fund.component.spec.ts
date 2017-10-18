import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCorpusFundComponent } from './list-corpus-fund.component';

describe('ListCorpusFundComponent', () => {
  let component: ListCorpusFundComponent;
  let fixture: ComponentFixture<ListCorpusFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCorpusFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCorpusFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
