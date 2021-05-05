import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTodaySelectbarComponent } from './weather-today-selectbar.component';

describe('WeatherTodaySelectbarComponent', () => {
  let component: WeatherTodaySelectbarComponent;
  let fixture: ComponentFixture<WeatherTodaySelectbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTodaySelectbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTodaySelectbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
