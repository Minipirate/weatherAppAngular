import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-today-selectbar',
  templateUrl: './weather-today-selectbar.component.html',
  styleUrls: ['./weather-today-selectbar.component.css']
})
export class WeatherTodaySelectbarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickTomorrow() {
    this.router.navigate(['/weathertomorrow'])
  }

  onClickWeekend() {
    this.router.navigate(['/weatherweekend'])
  }

  onClickHours() {
    this.router.navigate(['/weatherhours'])
  }

  onClickRegion() {
    this.router.navigate(['/weatherregion'])
  }


}
