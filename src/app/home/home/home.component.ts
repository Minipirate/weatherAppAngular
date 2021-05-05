import { Component, OnInit } from '@angular/core';
import { Town } from 'src/app/model/town';
import { TownData } from 'src/app/model/TownData';
import { DataAccessService } from 'src/app/services/dao-api/data-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentCity: any = {} as Town
  townDatas: any = {} as TownData

  constructor(private dataAccess: DataAccessService) { }

  ngOnInit(): void {
    this.currentCity = 'Montpellier'
    this.getTownData()   
  }

  async getTownData() {
    this.townDatas = await this.dataAccess.getDataByCityNameForPastHours(this.currentCity, 1).toPromise()
    console.log(typeof(this.townDatas));
    
  }

}
