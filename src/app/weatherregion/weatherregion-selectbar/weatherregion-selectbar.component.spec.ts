import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherregionSelectbarComponent } from './weatherregion-selectbar.component';

describe('WeatherregionSelectbarComponent', () => {
  let component: WeatherregionSelectbarComponent;
  let fixture: ComponentFixture<WeatherregionSelectbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherregionSelectbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherregionSelectbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
