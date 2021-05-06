import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTomorrowMatinmidisoirnuitComponent } from './weather-tomorrow-matinmidisoirnuit.component';

describe('WeatherTomorrowMatinmidisoirnuitComponent', () => {
  let component: WeatherTomorrowMatinmidisoirnuitComponent;
  let fixture: ComponentFixture<WeatherTomorrowMatinmidisoirnuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTomorrowMatinmidisoirnuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTomorrowMatinmidisoirnuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
