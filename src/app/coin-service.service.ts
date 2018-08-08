import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CoinServiceService {

  constructor( public http: HttpClient) { }

  getCoinValue(){
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
  }

}
