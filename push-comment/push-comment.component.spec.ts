import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushCommentComponent } from './push-comment.component';

describe('PushCommentComponent', () => {
  let component: PushCommentComponent;
  let fixture: ComponentFixture<PushCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
