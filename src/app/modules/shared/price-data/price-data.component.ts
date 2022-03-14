import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-price-data',
  templateUrl: './price-data.component.html',
  styleUrls: ['./price-data.component.css']
})
export class PriceDataComponent implements OnInit {
@Input() excur = false
@Input() package = false

  id: any;
  prices: any = [];
  standred_1=[];
  date=new Date();
  flag:any
  excurtion: any;
  constructor(private _prices: HomeserviceService, private active:ActivatedRoute) {



  }


  ngOnInit(): void {
    this.id=this.active.snapshot.params.slug
    this.excurtion=this.active.snapshot.params.excursion
    if(this.package == true){
      this._prices.getSinglepackage(this.id).subscribe(result => {
        this.prices = result.data[0].prices;
        this.flag = result.data[0].prices[0]?.attributes.season_start_date
      })
    }


    if(this.excur == true){
      this._prices.getSingleExcursion(this.excurtion).subscribe(result => {
        this.prices = result.data[0]
      })

    }





  }

}
