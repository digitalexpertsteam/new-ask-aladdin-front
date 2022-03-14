import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { singleDestination } from 'src/app/core/interfaces/single-destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  rangePric:any
  range:any
  rangePriceMax:any
  rateValue:any
  minDay:any
  maxDay:any
  minRate:any
  MaxRate:any
  max:number=5;
  count: any
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  modalService: any;
  rangeMDay: any;
  rangeSDay:any;
  rangePrice:any
  price$:any;
  price:any;
  tourType:any[]=['Family Friendly','Adventure or Sporting','Sightseeing','Combining','Spiritual'
  ,'Multi Country','Medical','Meditation','Romantic & Honeymoon','Indulgence & Luxury','Culinary, Food & Wine','Shore Excursion','Extended',]

  isCollapsed = false;
  isCollapsed2 = false;
  isCollapsed3 = false;
  isCollapsed4 = false;
  isCollapsed5 = true;
  isCollapsed6 = true;

  image = "../../../../../../../assets/imgs/default.png"
  idpackage: any
  nameCountry = '';
  destinationContainer: singleDestination[] = []
  Filter:singleDestination[]=[]
  Title: any;
  category: string = '';
  x: number = 1;
  hot: any[] = []
  descount: any
  id : any;


  catSlug:any
  form: any;
  constructor(private _singleDes: HomeserviceService, private sanitizer: DomSanitizer,
    private _Meta: Meta,
    private _Title: Title,
    private _active: ActivatedRoute,
    private fb: FormBuilder,
    private ngMod: NgbModal) {
      this.form = this.fb.group({
        rating:[1,Validators.required]

      })

      this.id = this._active.snapshot.params.id
    }

  ngOnInit(): void {
  }
  // RANGE PRICE
  rangePri1(val:any){
    this.rangePric = val.value
    this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 1 ,this.rangePrice || 10000 ,this.rangeSDay||1, this.rangeMDay||30,1,this.rateValue||5).subscribe(result => {
      this.Filter = result.data;
      this.count = result.data.length;
    })
  }
  rangePri2(val:any){
    this.rangePrice = val.value;
    this._singleDes.getSingleDestinationFilter(this.id , this.rangePric ,this.rangePrice || 10000, this.rangeSDay||1, this.rangeMDay||30,1,this.rateValue||5).subscribe(result => {
      this.Filter = result.data;
      this.count = result.data.length;

    })
  }
//  RANGE DAYS
rangeStartDay(minD:any){
  this.rangeMDay = minD.value;


  this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 0 ,this.rangePrice || 10000  ,this.rangeMDay,30,1,this.rateValue||5).subscribe(result => {
    this.Filter = result.data;
    this.count = result.data.length;


  })
}
rangeEndDay(val:any){
  this.rangeMDay = val.value;

  this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 0 , this.rangePrice || 10000 ,this.rangeMDay||1,this.rangeMDay,1,this.rateValue||5).subscribe(result => {
    this.Filter = result.data;
    this.count = result.data.length;

  })
}





  ratingMax(val:any){

    this.rateValue = val;

    this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 0 , this.rangePrice || 10000 ,this.rangeSDay||1,this.rangeMDay||30,1,this.rateValue).subscribe(result => {
      this.Filter = result.data;
      this.count = result.data.length;



    })

  }


  check(type:any){

    this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 0 , this.rangePrice || 10000 ,this.rangeSDay||1,this.rangeMDay||30,1,this.rateValue||5).subscribe(result => {
      this.Filter.filter(data => {

       return type.value == data
       })
       this.count = result.data.length;
    })








  }


}
