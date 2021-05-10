import { Component, OnInit } from '@angular/core';
import { PrevisionDatas } from 'src/app/model/PrevisionDatas';
import { Town } from 'src/app/model/town';
import { TownData } from 'src/app/model/TownData';
import { DataAccessService } from 'src/app/services/dao-api/data-access.service';
import { PrevisionService } from 'src/app/services/prevision/prevision.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentCity: any = {} as Town
  currentDay:any = {} as string
  townDatas: any = {} as TownData
  previsionDatas: any = {} as PrevisionDatas[]

  constructor(private dataAccess: DataAccessService, private previsionService: PrevisionService) { }

  ngOnInit(): void {
    this.currentCity = 'Montpellier'
    this.getTownData()   
    this.getPrevisionTownData()
  }

  async getTownData() {
    this.townDatas = await this.dataAccess.getDataByCityNameForPastHours(this.currentCity, 1).toPromise()
    console.log(this.townDatas);
    
    this.findDayByDate() // Appel apres recuperation de la date du jour 
  }

  async getPrevisionTownData() {
    this.previsionDatas = await this.dataAccess.getDataByCityNameForNextDays(this.currentCity).toPromise()
  }

  findDayByDate() {
    let date = this.previsionService.frenchToAmericanDate(this.townDatas[0].dateHour)
    this.currentDay = this.previsionService.whatDayIsIt(new Date(date).getDay()) 
  }

}
