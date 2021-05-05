import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Town } from 'src/app/model/town';
import { TownData } from 'src/app/model/TownData';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  url: string = 'http://3.13.227.164:8093/'

  constructor(private http: HttpClient) { }

  getAllTowns() {
    return this.http.get<Town[]>(this.url + 'towns')
  }

  getTownsByName(city: string) {
    // TODO
  }

  getAllUsers() {
    // TODO
  }

  getUserByEmail() {
    //TODO
  }

  getAllDataByCityName() {
    // TODO
  }

  getDataByCityNameForPastDays() {
    // TODO
  }

  /**
   * Effectue une requete HTTP dans notre API Back-End et si reussite retourne les donnees correspondantes a une ville donnee en parametre pour les X dernieres heures   
   * @returns A list of TownDatas for a given number of hours and a given city 
   */
  getDataByCityNameForPastHours(city: string, nbHours: number) {
    return this.http.get<TownData[]>(this.url + 'town/datas?city=' + city + '&hours=' + nbHours)
  }
}
