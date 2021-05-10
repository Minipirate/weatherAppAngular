import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrevisionDatas } from 'src/app/model/PrevisionDatas';
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

  /**
   * Effectue une requete HTTP dans notre API Back-End. 
   * Si reussite retourne les donnees Meteo et Qualite d'air correspondantes a une ville donnee en parametre pour les X derniers jours.  
   * @param city @param nbDays
   * @returns An array of TownDatas for a given number of days and a given city 
   */
  getDataByCityNameForPastDays(city: string, nbDays: number) {
    return this.http.get<TownData[]>(this.url + 'town/datas?city=' + city + '&days=' + nbDays)
  }

  /**
   * Effectue une requete HTTP dans notre API Back-End. 
   * Si reussite retourne les donnees Meteo et Qualite d'air correspondantes a une ville donnee en parametre pour les X dernieres heures.  
   * @param city @param nbHours
   * @returns An array of TownDatas for a given number of hours and a given city 
   */
  getDataByCityNameForPastHours(city: string, nbHours: number) {
    return this.http.get<TownData[]>(this.url + 'town/datas?city=' + city + '&hours=' + nbHours)
  }

  /**
   * Effectue une requete HTTP dans notre API Back-End. 
   * Si reussite retourne les donnees previsionnelles meteo pour la ville correspondante.
   * @param city 
   * @returns A list of PrevisionData for a given city with the date as key and PrevisionData as value
   */
  getDataByCityNameForNextDays(city: string) {
    return this.http.get<PrevisionDatas[]>(this.url + 'town/datas/previ?city=' + city)
  }
}
