import { Component, Input, OnInit } from '@angular/core';
import { TownData } from 'src/app/model/TownData';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit {

  @Input() townDatas: any = {} as TownData
  @Input() currentCity: any = {} as TownData 
  highestPolluant: any

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.findHighestPolluant()
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

}
