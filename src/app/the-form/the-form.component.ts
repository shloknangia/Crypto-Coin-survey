import { Component, OnInit } from '@angular/core';
import { CoinServiceService } from '../coin-service.service'


@Component({
  selector: 'app-the-form',
  templateUrl: './the-form.component.html',
  styleUrls: ['./the-form.component.css']
})
export class TheFormComponent implements OnInit {

  top100coins;
  
  coinSurvey = {
    name: '',
    favouriteCoin: '',
    comments: ''
  };   

  constructor(public coinservice: CoinServiceService) { }

  ngOnInit() {
    this.coinservice.getCoinValue().subscribe((data) => {
        /** console.log(data);**/
        this.top100coins = data;
    });
  }

  sendForm(){
    console.log(this.coinSurvey);
  }

}
