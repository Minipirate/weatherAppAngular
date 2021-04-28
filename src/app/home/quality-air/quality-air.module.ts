import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapQualityAirComponent } from './map-quality-air/map-quality-air.component';
import { IndicatorQualityAirComponent } from './indicator-quality-air/indicator-quality-air.component';



@NgModule({
  declarations: [
    MapQualityAirComponent,
    IndicatorQualityAirComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    IndicatorQualityAirComponent,
    MapQualityAirComponent
  ]
})
export class QualityAirModule { }
