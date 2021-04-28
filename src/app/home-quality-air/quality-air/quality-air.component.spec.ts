import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAirComponent } from './quality-air.component';

describe('QualityAirComponent', () => {
  let component: QualityAirComponent;
  let fixture: ComponentFixture<QualityAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
