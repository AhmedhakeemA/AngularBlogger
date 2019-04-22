import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAPiComponent } from './images-api.component';

describe('ImagesAPiComponent', () => {
  let component: ImagesAPiComponent;
  let fixture: ComponentFixture<ImagesAPiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesAPiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesAPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
