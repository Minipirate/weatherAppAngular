import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherhoursComponent } from './weatherhours.component';

describe('WeatherhoursComponent', () => {
  let component: WeatherhoursComponent;
  let fixture: ComponentFixture<WeatherhoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherhoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
