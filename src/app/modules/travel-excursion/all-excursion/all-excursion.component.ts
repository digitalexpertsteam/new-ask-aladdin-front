import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { destination } from 'src/app/core/interfaces/destination';
import { Excursions } from 'src/app/core/interfaces/excursions';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-excursion',
  templateUrl: './all-excursion.component.html',
  styleUrls: ['./all-excursion.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class AllExcursionComponent implements OnInit {
  x = 1;
  max = 5;
  isReadonly = true;
  readonly = true
  num: any;
  name: any;
  overStar: number | undefined;
  percent: number | undefined;
  title: any;
  phone:any
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  id: any;
  idpackage: any;
  getDestinationExcursions: Excursions[] = [];
  exContent:destination[] = [];
  desName:any;
  desSlug:any;
  exName:any;
  count:any
  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed3 = false;
  isCollapsed4 = false;
  isCollapsed5 = false;
  isCollapsed6 = false;
  tourType:any[]=['Family Friendly','Adventure or Sporting','Sightseeing','Combining','Spiritual'
  ,'Multi Country','Medical','Meditation','Romantic & Honeymoon','Indulgence & Luxury','Culinary, Food & Wine','Shore Excursion','Extended',]
  tourtype:any="";
  rating :any
  rangeSDay:any;
  rangeMDay:any;
  rangePric:any
  range:any
  rangePriceMax:any
  minDay:any
  maxDay:any
  minRate:any
  MaxRate:any
  rate = 1;
  rangePrice:any
  Filter:any
  idCity:any=1
  cities = []
  maxx:number=5;
  public form : FormGroup
  constructor(
    private _excursions: HomeserviceService,
    private _Active:ActivatedRoute,
    private sanitizer: DomSanitizer,

    private modalService: NgbModal,
    private _Meta : Meta ,
    private _Title : Title,
    private fb: FormBuilder,
  ) {

    this.form = this.fb.group({rating:[1,Validators.required]})

  }

  ngOnInit(): void {
    this.id = this._Active.snapshot.params.city;

    this._excursions.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });




    this._excursions.allExcursionCity(this.id).subscribe(result => {
      this.Filter = result.data;
      this.cities = result.data
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      this.exName = result.data.excursion_name;
      this.name = result.data;
      this.count = result.data.length;
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
        { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
        { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
        { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
        { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].destination_twitter_image}` },
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].destination_facebook_image}` },

      ]);
    });
    this._excursions.getOneDestinationDetails(1).subscribe(res => {
      this.exContent = res.data[0].categories;
      this.exName = res.data[0].categories[2].name;


    })


  }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  setId( price:any ){


    localStorage.setItem('price' , price)
  }


  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
// // RANGE PRICE
rangePri1(val:any){
  this.rangePric = val.value
  this._excursions.getExcursionsFilter(this.id , this.rangePric || 1 ,this.rangePrice || 10000 ,this.rangeSDay||1, this.rangeMDay||30,1,5).subscribe(result => {
    this.Filter = result.data;
    this.cities=result.cities_data


    this.count = result.data.length;
  })
}
rangePri2(val:any){
  this.rangePrice = val.value;
  this._excursions.getExcursionsFilter(this.id , this.rangePric ,this.rangePrice || 10000, this.rangeSDay||1, this.rangeMDay||30,1,5).subscribe(result => {
    this.Filter = result.data;
    this.count = result.data.length;

  })
}
//  RANGE DAYS
rangeStartDay(minD:any){
this.rangeSDay = minD.value;
this._excursions.getExcursionsFilter(this.id , this.rangePric || 0 ,this.rangePrice || 10000  ,this.rangeSDay,30,1,5).subscribe(result => {
  this.Filter = result.data;
  this.count = result.data.length;
})
}
rangeEndDay(val:any){
this.rangeMDay = val.value;

this._excursions.getExcursionsFilter(this.id , this.rangePric || 0 , this.rangePrice || 10000 ,this.rangeSDay||1,this.rangeMDay,1,5).subscribe(result => {
  this.Filter = result.data;
  this.count = result.data.length;


})
}



citiesEX(val:any){
  this.rangeMDay = val.value;

  this._excursions.getExcursionsFilter(this.id , this.rangePric || 0 , this.rangePrice || 10000 ,this.rangeSDay||1,this.rangeMDay,1,5).subscribe(result => {
    this.Filter = result.data;
    this.cities=result.cities_data




    this.count = result.data.length;

  })
  }

}
