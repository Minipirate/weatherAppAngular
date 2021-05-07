import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-weekend-selectbar',
  templateUrl: './weather-weekend-selectbar.component.html',
  styleUrls: ['./weather-weekend-selectbar.component.css']
})
export class WeatherWeekendSelectbarComponent implements OnInit {

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
