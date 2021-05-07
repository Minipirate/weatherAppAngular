import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weatherregion-selectbar',
  templateUrl: './weatherregion-selectbar.component.html',
  styleUrls: ['./weatherregion-selectbar.component.css']
})
export class WeatherregionSelectbarComponent implements OnInit {

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
