import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapQualityAirComponent } from './map-quality-air.component';

describe('MapQualityAirComponent', () => {
  let component: MapQualityAirComponent;
  let fixture: ComponentFixture<MapQualityAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapQualityAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapQualityAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
