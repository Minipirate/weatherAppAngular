import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-tomorrow-selectbar',
  templateUrl: './weather-tomorrow-selectbar.component.html',
  styleUrls: ['./weather-tomorrow-selectbar.component.css']
})
export class WeatherTomorrowSelectbarComponent implements OnInit {

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
