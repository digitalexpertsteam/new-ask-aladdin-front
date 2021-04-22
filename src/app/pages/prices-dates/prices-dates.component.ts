import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  flag:any
  constructor(private _prices: HomeserviceService, private active:ActivatedRoute) {



  }
  

  ngOnInit(): void {
    this.id=this.active.snapshot.params.slug

    this._prices.getSinglepackage(this.id).subscribe(result => {
      this.prices = result.data[0].prices;
      this.flag = result.data[0].prices[0].attributes.season_start_date
      console.log(this.flag);
      
      
      
    })

   
  }

}




