import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadinglistComponent } from './headinglist.component';

describe('HeadinglistComponent', () => {
  let component: HeadinglistComponent;
  let fixture: ComponentFixture<HeadinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
