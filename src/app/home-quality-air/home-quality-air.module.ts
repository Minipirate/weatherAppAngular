import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityAirComponent } from './quality-air/quality-air.component';
import { MapQualityAirComponent } from './quality-air/map-quality-air/map-quality-air.component';
import { IndicatorQualityAirComponent } from './quality-air/indicator-quality-air/indicator-quality-air.component';



@NgModule({
  declarations: [
    QualityAirComponent,
    MapQualityAirComponent,
    IndicatorQualityAirComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeQualityAirModule { }

