import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAirAtHomePollutantsComponent } from './quality-air-at-home-pollutants.component';

describe('QualityAirAtHomePollutantsComponent', () => {
  let component: QualityAirAtHomePollutantsComponent;
  let fixture: ComponentFixture<QualityAirAtHomePollutantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAirAtHomePollutantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAirAtHomePollutantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
