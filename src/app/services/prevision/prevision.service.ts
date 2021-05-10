import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrevisionService {

  currentDay = new Date().getDay()

  constructor(private datePipe: DatePipe) { }

  /**
   * Retourne le jour correspondant au nombre donne en entree 
   * @param day Par defaut sera le jour courant
   * @returns a day of the week based on the given input 
   */
  whatDayIsIt(day: number = new Date().getDay()) :string {

    // Jugez pas svp <3
    if (day == 7) day = 0
    if (day == 8) day = 1
    if (day == 9) day = 2 

    switch (day) {
      case 0:
        return "Dimanche";
      case 1:
        return "Lundi"
      case 2:
        return "Mardi";
      case 3:
        return "Mercredi";
      case 4:
        return "Jeudi";
      case 5:
        return "Vendredi";
      case 6:
        return "Samedi";
      default:
        return ''
    }
  }

  /**
   * Retourne les n prochains jours pour la recuperation de l'index des donnees previsionnelles  
   * @param nbDays
   * @returns an array of string
   */
  populateDates(nbDays: number) {
    
    nbDays++
    let dates: string[] = []

    for (let i = 1; i < nbDays; i++) {
      let date : string = this.datePipe.transform(new Date().setDate(new Date().getDate() + i), 'dd-MM-yyyy') + ' 11:00'  
      dates.push(date)       
    }

    return dates
  }

  frenchToAmericanDate(date: any) {
    date = this.datePipe.transform(date, 'dd-MM-yyyy hh:mm')
    return date
  }

  /**
   * Retourne le nom des n prochains jours pour l'affichage des donnees previsionelles
   * @param nbDays
   * @returns 
   */
  populateDays(nbDays: number){

    nbDays++
    let days: string[] = []

    for (let i = 1; i < nbDays; i++) {
      days.push(this.whatDayIsIt(this.currentDay + i)) 
    }

    return days
  }
}
