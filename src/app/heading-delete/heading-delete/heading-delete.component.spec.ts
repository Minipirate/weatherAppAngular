import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingDeleteComponent } from './heading-delete.component';

describe('HeadingDeleteComponent', () => {
  let component: HeadingDeleteComponent;
  let fixture: ComponentFixture<HeadingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
