import { Component, OnInit } from '@angular/core';
import { Town } from 'src/app/model/town';
import { DataAccessService } from 'src/app/services/dao-api/data-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentCity: any = {} as Town

  constructor(private dataAccess: DataAccessService) { }

  ngOnInit(): void {
    this.currentCity = 'Montpellier'
    this.getTownData()
  }

  getTownData() {
    this.dataAccess.getDataByCityNameForPastHours(this.currentCity, 1).subscribe( res => {
      console.log(res);
      
    })
  }

}
