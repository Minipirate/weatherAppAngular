import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-air-at-home-card',
  templateUrl: './quality-air-at-home-card.component.html',
  styleUrls: ['./quality-air-at-home-card.component.css']
})
export class QualityAirAtHomeCardComponent implements OnInit {

  @Input() currentDayData: any 
  highestPollutant: any
  backgroundColor: any

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.currentDayData);
    this.findHighestPolluant()
    this.findBackgroundColor()
  }

  findHighestPolluant() {
    if(this.currentDayData[0]?.airQualityDatas == undefined) return 

    let airQualityDatas = this.currentDayData[0]?.airQualityDatas
    let highestValue = airQualityDatas[1].value
    this.highestPollutant = 1

    for (let i = 2; i < airQualityDatas.length; i++) {  
      if (airQualityDatas[i].value > highestValue) this.highestPollutant = i
    }
  }

  // Definit le background colore des cards en fonction de la qualite de l'air
  findBackgroundColor() { 
    if(this.currentDayData[0]?.airQualityDatas[0]?.value === undefined) return 

    let indice = this.currentDayData[0]?.airQualityDatas[0]?.value
    if(indice > 0 && indice < 51) this.backgroundColor = '#A8E05F'
    else if (indice > 50 && indice < 101) this.backgroundColor = '#FDD64B'
    else if (indice > 100) this.backgroundColor = '#FE6A69'
  }
}
