import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';


@Component({
  selector: 'app-prices-dates',
  templateUrl: './prices-dates.component.html',
  styleUrls: ['./prices-dates.component.css']
})
export class PricesDatesComponent implements OnInit {

  id: any;
  prices: any = [];
  standred_1:any
  constructor(private _prices: HomeserviceService) {


  }
  

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this._prices.getTravelGuide(this.id).subscribe(result => {
      this.prices = result.data[0].prices;
      this.standred_1 = this.prices[0].attributes.double_room_standard_1 & this.prices[0].attributes.double_room_standard_1 &this.prices[0].attributes.double_room_standard_1 &
      this.prices[0].attributes.double_room_standard_1&this.prices[0].attributes.double_room_standard_1&this.prices[0].attributes.double_room_standard_1
      console.log(this.standred_1);
      
      
    })

   
  }

}




