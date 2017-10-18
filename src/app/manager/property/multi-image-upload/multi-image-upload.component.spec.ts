import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImageUploadComponent } from './multi-image-upload.component';

describe('MultiImageUploadComponent', () => {
  let component: MultiImageUploadComponent;
  let fixture: ComponentFixture<MultiImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
