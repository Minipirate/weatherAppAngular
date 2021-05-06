import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWeekendMorningnightComponent } from './weather-weekend-morningnight.component';

describe('WeatherWeekendMorningnightComponent', () => {
  let component: WeatherWeekendMorningnightComponent;
  let fixture: ComponentFixture<WeatherWeekendMorningnightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWeekendMorningnightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWeekendMorningnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
