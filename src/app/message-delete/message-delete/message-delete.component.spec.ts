import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDeleteComponent } from './message-delete.component';

describe('MessageDeleteComponent', () => {
  let component: MessageDeleteComponent;
  let fixture: ComponentFixture<MessageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
