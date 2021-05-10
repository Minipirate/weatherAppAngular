import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-air-at-home-pollutants',
  templateUrl: './quality-air-at-home-pollutants.component.html',
  styleUrls: ['./quality-air-at-home-pollutants.component.css']
})
export class QualityAirAtHomePollutantsComponent implements OnInit {

  @Input() currentDayData: any
  smallerCurrentDayData: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.makeSmallerArrayOfData()
  }

  makeSmallerArrayOfData() {
    if (this.currentDayData[0] === undefined) return

    for (let i = 1; i < 5; i++) {
      this.smallerCurrentDayData.push(this.currentDayData[0]?.airQualityDatas[i])
    }
    
  }

}
