import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/services/dao-api/data-access.service';
import { PrevisionService } from 'src/app/services/prevision/prevision.service';

@Component({
  selector: 'app-quality-air-at-home',
  templateUrl: './quality-air-at-home.component.html',
  styleUrls: ['./quality-air-at-home.component.css']
})
export class QualityAirAtHomeComponent implements OnInit {

  currentCity: any
  currentDayData: any
  dayOfTheWeek: any
  currentDayForData: any
  qualityAirData: any


  constructor(private dataAccess: DataAccessService, private datePipe: DatePipe, private pService: PrevisionService) { 
  }

  ngOnInit(): void {
    this.currentCity = 'Montpellier'
    this.getCurrentQualityAirData()
    this.dayOfTheWeek = this.pService.whatDayIsIt()
  }

  async getCurrentQualityAirData() {
    this.qualityAirData = await this.dataAccess.getDataByCityNameForPastDays(this.currentCity, 7).toPromise() 
    this.currentDayForData = this.datePipe.transform(new Date(), "dd-MM-yyyy")
    this.currentDayData = this.qualityAirData[this.currentDayForData]
    console.log(this.qualityAirData)
  }
}
