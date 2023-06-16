import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPostsComponent } from './control-posts.component';

describe('ControlPostsComponent', () => {
  let component: ControlPostsComponent;
  let fixture: ComponentFixture<ControlPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPostsComponent]
    });
    fixture = TestBed.createComponent(ControlPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
