import { Component, Input, OnInit } from '@angular/core';
import { PrevisionDatas } from 'src/app/model/PrevisionDatas';
import { PrevisionService } from 'src/app/services/prevision/prevision.service';

@Component({
  selector: 'app-indicator-weather',
  templateUrl: './indicator-weather.component.html',
  styleUrls: ['./indicator-weather.component.css']
})
export class IndicatorWeatherComponent implements OnInit {

  @Input() previsionDatas: any = {} as PrevisionDatas
  myDates: string[] = []
  myDays: string[] = []

  constructor(private prevision: PrevisionService) { 
  }

  ngOnInit(): void {
    this.myDates = this.prevision.populateDates(3)
    this.myDays = this.prevision.populateDays(3)
  }

}
