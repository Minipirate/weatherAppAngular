import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherregionMapComponent } from './weatherregion-map.component';

describe('WeatherregionMapComponent', () => {
  let component: WeatherregionMapComponent;
  let fixture: ComponentFixture<WeatherregionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherregionMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherregionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
