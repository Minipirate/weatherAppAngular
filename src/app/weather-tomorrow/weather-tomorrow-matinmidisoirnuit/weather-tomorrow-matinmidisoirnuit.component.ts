import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-tomorrow-matinmidisoirnuit',
  templateUrl: './weather-tomorrow-matinmidisoirnuit.component.html',
  styleUrls: ['./weather-tomorrow-matinmidisoirnuit.component.css']
})
export class WeatherTomorrowMatinmidisoirnuitComponent implements OnInit {

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
