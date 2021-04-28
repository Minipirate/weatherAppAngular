import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorListWeatherComponent } from './indicator-list-weather.component';

describe('IndicatorListWeatherComponent', () => {
  let component: IndicatorListWeatherComponent;
  let fixture: ComponentFixture<IndicatorListWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorListWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorListWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
