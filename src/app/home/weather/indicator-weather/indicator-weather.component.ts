import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PrevisionDatas } from 'src/app/model/PrevisionDatas';

@Component({
  selector: 'app-indicator-weather',
  templateUrl: './indicator-weather.component.html',
  styleUrls: ['./indicator-weather.component.css'],
  providers: [DatePipe]
})
export class IndicatorWeatherComponent implements OnInit {

  @Input() previsionDatas: any = {} as PrevisionDatas
  dataArray: any 
  myDates: string[] = []
  myDays: string[] = []

  constructor(private datePipe: DatePipe) { 
  }

  ngOnInit(): void {
    this.populateDates()
  }

  ngOnChanges() {
    this.previsionsDatasToArray()
  }

  previsionsDatasToArray() {
    if (this.previsionDatas === undefined) return

  }

  populateDates() {
    let currentDay = new Date().getDay()

    for (let i = 1; i < 4; i++) {
      let date : string = this.datePipe.transform(new Date().setDate(new Date().getDate() + i), 'dd-MM-yyyy') + ' 11:00'  
      this.myDates.push(date)   
      this.myDays.push(this.whatDayIsIt(currentDay + i)) 
    }

    console.log(this.myDates);
    console.log(this.myDays)
  }

  whatDayIsIt(day: number) :string {

    // Jugez pas svp <3
    if (day == 7) day = 0
    if (day == 8) day = 1
    if (day == 9) day = 2 

    switch (day) {
      case 0:
        return "Dimanche";
      case 1:
        return "Lundi"
      case 2:
        return "Mardi";
      case 3:
        return "Mercredi";
      case 4:
        return "Jeudi";
      case 5:
        return "Vendredi";
      case 6:
        return "Samedi";
      default:
        return ''
    }
  }

}
