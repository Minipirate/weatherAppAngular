import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAirAtHomeCardComponent } from './quality-air-at-home-card.component';

describe('QualityAirAtHomeCardComponent', () => {
  let component: QualityAirAtHomeCardComponent;
  let fixture: ComponentFixture<QualityAirAtHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAirAtHomeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAirAtHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
