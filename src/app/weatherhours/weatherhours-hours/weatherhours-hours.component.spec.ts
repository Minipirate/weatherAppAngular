import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherhoursHoursComponent } from './weatherhours-hours.component';

describe('WeatherhoursHoursComponent', () => {
  let component: WeatherhoursHoursComponent;
  let fixture: ComponentFixture<WeatherhoursHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherhoursHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherhoursHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
