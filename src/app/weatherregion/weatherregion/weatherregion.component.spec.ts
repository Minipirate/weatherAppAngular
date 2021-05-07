import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherregionComponent } from './weatherregion.component';

describe('WeatherregionComponent', () => {
  let component: WeatherregionComponent;
  let fixture: ComponentFixture<WeatherregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
