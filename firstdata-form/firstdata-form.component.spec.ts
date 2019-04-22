import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstdataFormComponent } from './firstdata-form.component';

describe('FirstdataFormComponent', () => {
  let component: FirstdataFormComponent;
  let fixture: ComponentFixture<FirstdataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstdataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstdataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
