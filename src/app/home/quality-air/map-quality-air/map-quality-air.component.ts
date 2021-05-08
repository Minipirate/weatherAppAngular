import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-map-quality-air',
  templateUrl: './map-quality-air.component.html',
  styleUrls: ['./map-quality-air.component.css']
})
export class MapQualityAirComponent implements OnInit {

  map: any

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'OpenMap',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([3.8772, 43.6109]),
        zoom: 11
      })
    });
  }

}
