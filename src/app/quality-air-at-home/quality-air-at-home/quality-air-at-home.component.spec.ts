import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAirAtHomeComponent } from './quality-air-at-home.component';

describe('QualityAirAtHomeComponent', () => {
  let component: QualityAirAtHomeComponent;
  let fixture: ComponentFixture<QualityAirAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAirAtHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAirAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
