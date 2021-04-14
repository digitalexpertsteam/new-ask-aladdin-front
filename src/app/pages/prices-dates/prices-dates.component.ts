import { Component, OnInit } from '@angular/core';
import { DayPickerComponent } from 'ngx-bootstrap/datepicker';
import { HomeserviceService } from '../../services/homeservice.service';


@Component({
  selector: 'app-prices-dates',
  templateUrl: './prices-dates.component.html',
  styleUrls: ['./prices-dates.component.css']
})
export class PricesDatesComponent implements OnInit {

  id: any;
  prices: any = [];
  standred_1=[];
  date=new Date();
  
  constructor(private _prices: HomeserviceService) {


  }
  

  ngOnInit(): void {
    this.id = localStorage.getItem("idPack");
    this._prices.getSinglepackage(this.id).subscribe(result => {
      this.prices = result.data[0].prices;
      
      
    })

   
  }

}




