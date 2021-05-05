import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTodayMatinmidisoirnuitComponent } from './weather-today-matinmidisoirnuit.component';

describe('WeatherTodayMatinmidisoirnuitComponent', () => {
  let component: WeatherTodayMatinmidisoirnuitComponent;
  let fixture: ComponentFixture<WeatherTodayMatinmidisoirnuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTodayMatinmidisoirnuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTodayMatinmidisoirnuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
