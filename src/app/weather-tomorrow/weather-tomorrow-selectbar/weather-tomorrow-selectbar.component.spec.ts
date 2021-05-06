import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTomorrowSelectbarComponent } from './weather-tomorrow-selectbar.component';

describe('WeatherTomorrowSelectbarComponent', () => {
  let component: WeatherTomorrowSelectbarComponent;
  let fixture: ComponentFixture<WeatherTomorrowSelectbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTomorrowSelectbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTomorrowSelectbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
