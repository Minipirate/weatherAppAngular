import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorQualityAirComponent } from './indicator-quality-air.component';

describe('IndicatorQualityAirComponent', () => {
  let component: IndicatorQualityAirComponent;
  let fixture: ComponentFixture<IndicatorQualityAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorQualityAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorQualityAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
