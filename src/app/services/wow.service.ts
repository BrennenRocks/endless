import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WowService {

  private blizz: string = 'bbcng2tbc27vwdv3tamjyky3xxqvyy7e';

  constructor(
    private http: HttpClient
  ) { }

  public getNews(): Observable<any> {
    return this.http.get<any>('https://us.api.battle.net/wow/guild/kiljaeden/endless?fields=news&locale=en_US&apikey=' + this.blizz);
  }

  public getItem(id: string): Observable<any> {
    return this.http.get<any>('https://us.api.battle.net/wow/item/' + id + '?locale=en_US&apikey=' + this.blizz);
  }


}
