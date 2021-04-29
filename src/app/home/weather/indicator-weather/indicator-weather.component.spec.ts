import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorWeatherComponent } from './indicator-weather.component';

describe('IndicatorWeatherComponent', () => {
  let component: IndicatorWeatherComponent;
  let fixture: ComponentFixture<IndicatorWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
