import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherhoursSelectbarComponent } from './weatherhours-selectbar.component';

describe('WeatherhoursSelectbarComponent', () => {
  let component: WeatherhoursSelectbarComponent;
  let fixture: ComponentFixture<WeatherhoursSelectbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherhoursSelectbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherhoursSelectbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
