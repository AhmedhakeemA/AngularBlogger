import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDefaultComponent } from './main-page-default.component';

describe('MainPageDefaultComponent', () => {
  let component: MainPageDefaultComponent;
  let fixture: ComponentFixture<MainPageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
