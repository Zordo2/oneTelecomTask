import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCommentsComponent } from './control-comments.component';

describe('ControlCommentsComponent', () => {
  let component: ControlCommentsComponent;
  let fixture: ComponentFixture<ControlCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlCommentsComponent]
    });
    fixture = TestBed.createComponent(ControlCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
