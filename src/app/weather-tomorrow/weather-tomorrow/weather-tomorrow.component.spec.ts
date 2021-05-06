import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTomorrowComponent } from './weather-tomorrow.component';

describe('WeatherTomorrowComponent', () => {
  let component: WeatherTomorrowComponent;
  let fixture: ComponentFixture<WeatherTomorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTomorrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
