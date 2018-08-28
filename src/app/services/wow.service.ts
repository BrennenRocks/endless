import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { MEMBERS, randomNumber } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class WowService {

  private blizz: string = environment.blizz;

  constructor(
    private http: HttpClient
  ) { }

  public getNews(): Observable<any> {
    return this.http.get<any>('https://us.api.battle.net/wow/guild/kiljaeden/endless?fields=news&locale=en_US&apikey=' + this.blizz);
  }

  public getItem(id: string): Observable<any> {
    return this.http.get<any>('https://us.api.battle.net/wow/item/' + id + '?locale=en_US&apikey=' + this.blizz);
  }

  public getStatistics(realm: string, name: string): Observable<any> {
    return this.http.get<any>('https://us.api.battle.net/wow/character/' + realm + '/' + name + '?fields=statistics&locale=en_US&apikey=' + this.blizz);
  }

  public getSpotlightStats(): Observable<any> {
    const rand = randomNumber(0, MEMBERS.length - 1);
    console.log(rand);
    let char = MEMBERS[rand];
    return this.http.get<any>('https://us.api.battle.net/wow/character/' + char.realm + '/' + char.name + '?fields=statistics&locale=en_US&apikey=' + this.blizz);
  }

}
