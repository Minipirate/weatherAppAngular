import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWeekendSelectbarComponent } from './weather-weekend-selectbar.component';

describe('WeatherWeekendSelectbarComponent', () => {
  let component: WeatherWeekendSelectbarComponent;
  let fixture: ComponentFixture<WeatherWeekendSelectbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWeekendSelectbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWeekendSelectbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
