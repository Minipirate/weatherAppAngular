import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingCreateComponent } from './heading-create.component';

describe('HeadingCreateComponent', () => {
  let component: HeadingCreateComponent;
  let fixture: ComponentFixture<HeadingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
