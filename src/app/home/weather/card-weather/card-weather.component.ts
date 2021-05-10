import { Component, Input, OnInit } from '@angular/core';
import { TownData } from 'src/app/model/TownData';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit {

  @Input() townDatas: any = {} as TownData
  backgroundColor: any
  highestPolluant: any

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.findHighestPolluant()
    this.findBackgroundColor()
  }

  findHighestPolluant() {
    if(this.townDatas[0]?.airQualityDatas == undefined) return 

    let airQualityDatas = this.townDatas[0]?.airQualityDatas
    let highestValue = airQualityDatas[1].value
    this.highestPolluant = 1

    for (let i = 2; i < airQualityDatas.length; i++) {  
      if (airQualityDatas[i].value > highestValue) this.highestPolluant = i
    }
  }

  // Definit le background colore des cards en fonction de la qualite de l'air
  findBackgroundColor() { 
    if(this.townDatas[0]?.airQualityDatas[0]?.value === undefined) return 

    let indice = this.townDatas[0]?.airQualityDatas[0]?.value
    if(indice > 0 && indice < 51) this.backgroundColor = '#A8E05F'
    else if (indice > 50 && indice < 101) this.backgroundColor = '#FDD64B'
    else if (indice > 100) this.backgroundColor = '#FE6A69'
  }

}
