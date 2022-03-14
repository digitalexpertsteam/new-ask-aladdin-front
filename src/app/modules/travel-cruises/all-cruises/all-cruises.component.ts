import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { destination } from 'src/app/core/interfaces/destination';
import { singleDestination } from 'src/app/core/interfaces/single-destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-cruises',
  templateUrl: './all-cruises.component.html',
  styleUrls: ['./all-cruises.component.css']
})
export class AllCruisesComponent implements OnInit {
  title: any;
  descount: any;
  x = 1;
  max = 5;
  maxx:number=5;
  isReadonly = false;
  num: any;
  name: any;
  desName:any;
  desSlug:any;
  cruContent:destination[]=[];
  cruName:any;
  count:any
  phone:any
  Filter:any
  nameCountry = '';
  hot: any[] = []
  Title: any;
  rangeSDay:any;
  rangeMDay:any;
  rangePric:any
  range:any
  rangePriceMax:any
  minDay:any=1
  maxDay:any=30
  minRate:any
  MaxRate:any
  rate = 1;
  rangePrice:any
  readonly = true
  overStar: number | undefined;
  percent: number | undefined;
  id: any;

  isCollapsed = false;
  isCollapsed2 = false;
  isCollapsed3 = true;

  tourType:any[]=['Family Friendly','Adventure or Sporting','Sightseeing','Combining','Spiritual'
  ,'Multi Country','Medical','Meditation','Romantic & Honeymoon','Indulgence & Luxury','Culinary, Food & Wine','Shore Excursion','Extended',]
  tourtype:any="";
  rating :any
  public form : FormGroup

 idpackage: any;
  constructor(
    private _excursions: HomeserviceService,
    private _Active:ActivatedRoute ,
     private modalService: NgbModal,
     private _Meta:Meta , private _Title:Title ,private ngMod: NgbModal,private fb: FormBuilder)
      {
        this.form = this.fb.group({rating:[1,Validators.required]})



    }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }



  ngOnInit(): void {
    this._excursions.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
      this.id = this._Active.snapshot.params.slug
      this._excursions.getCruisesFilter(this.id , 0 ,10000,1,30,1,5).subscribe(result => {
       this.Filter = result.data
       this.count = result.data.length
       this.desSlug = result.data[0].destination_slug
       this.desName = result.data[0].destination_name
       this.descount = result.data.discount + "%"
       this.hot = result.data.hot_offer
       this.nameCountry = result.data[0].destination_name;
       this.Title = result.data[0].destination_seo_title;
       this._Title.setTitle(`${this.Title}`)
       this._Meta.addTags([
         { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
         { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
         { name: 'description', content: `${result.data[0].destination_seo_description}` },
         { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
         { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
         { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
         { property: "og:image", content: `${result.data[0].destination_twitter_image}` },
         { property: "og:image", content: `${result.data[0].destination_facebook_image}` },

       ]);
     })
    });


    this._excursions.getOneDestinationDetails(1).subscribe(res => {

      this.cruContent = res.data[0].categories;
      this.cruName = res.data[0].categories[3].name;
    })



  }

 // RANGE PRICE
 rangePri1(val:any){
  this.rangePric = val.value
  this._excursions.getCruisesFilter(this.id , this.rangePric || 1 ,this.rangePrice || 10000 ,this.rangeSDay||1, this.rangeMDay||30,1,5).subscribe(result => {
    this.Filter = result.data;
    this.count = result.data.length;
  })
}
rangePri2(val:any){
  this.rangePrice = val.value;
  this._excursions.getCruisesFilter(this.id , this.rangePric ,this.rangePrice || 10000, this.rangeSDay||1, this.rangeMDay||30,1,5).subscribe(result => {
    this.Filter = result.data;
    this.count = result.data.length;

  })
}
//  RANGE DAYS
rangeStartDay(minD:any){
this.rangeSDay = minD.value;


this._excursions.getCruisesFilter(this.id , this.rangePric || 0 ,this.rangePrice || 10000  ,this.rangeSDay,30,1,5).subscribe(result => {
  this.Filter = result.data;
  this.count = result.data.length;


})
}
rangeEndDay(val:any){
this.rangeMDay = val.value;

this._excursions.getCruisesFilter(this.id , this.rangePric || 0 , this.rangePrice || 10000 ,this.rangeSDay||1,this.rangeMDay,1,5).subscribe(result => {
  this.Filter = result.data;
  this.count = result.data.length;

})
}
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }


}
