import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAirAtHomePollutantslistComponent } from './quality-air-at-home-pollutantslist.component';

describe('QualityAirAtHomePollutantslistComponent', () => {
  let component: QualityAirAtHomePollutantslistComponent;
  let fixture: ComponentFixture<QualityAirAtHomePollutantslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAirAtHomePollutantslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAirAtHomePollutantslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
