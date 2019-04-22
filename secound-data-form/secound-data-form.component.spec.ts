import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundDataFormComponent } from './secound-data-form.component';

describe('SecoundDataFormComponent', () => {
  let component: SecoundDataFormComponent;
  let fixture: ComponentFixture<SecoundDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecoundDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
