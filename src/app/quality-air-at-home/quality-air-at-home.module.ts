import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { QualityAirAtHomeComponent } from './quality-air-at-home/quality-air-at-home.component';
import { QualityAirAtHomeCardComponent } from './quality-air-at-home-card/quality-air-at-home-card.component';
import { QualityAirAtHomePollutantsComponent } from './quality-air-at-home-pollutants/quality-air-at-home-pollutants.component';
import { QualityAirAtHomePollutantslistComponent } from './quality-air-at-home-pollutantslist/quality-air-at-home-pollutantslist.component';

@NgModule({
  declarations: [
    QualityAirAtHomeComponent,
    QualityAirAtHomeCardComponent,
    QualityAirAtHomePollutantsComponent,
    QualityAirAtHomePollutantslistComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports : [
    QualityAirAtHomeComponent,
    QualityAirAtHomeCardComponent,
    QualityAirAtHomePollutantslistComponent
  ],
  bootstrap: [AppComponent]
})
export class QualityAirAtHomeModule { }
