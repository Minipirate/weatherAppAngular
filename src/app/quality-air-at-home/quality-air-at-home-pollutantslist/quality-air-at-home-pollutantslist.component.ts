import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-air-at-home-pollutantslist',
  templateUrl: './quality-air-at-home-pollutantslist.component.html',
  styleUrls: ['./quality-air-at-home-pollutantslist.component.css']
})
export class QualityAirAtHomePollutantslistComponent implements OnInit {

  @Input() qualityAirData: any
  greatArrayOfData: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.qualityAirData)
  }

  makeGreatArrayAgain() {
    
  }

}
