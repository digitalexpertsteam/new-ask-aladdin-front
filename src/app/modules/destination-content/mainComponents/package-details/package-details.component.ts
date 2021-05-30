import { Component, enableProdMode, OnInit, ViewEncapsulation } from '@angular/core';
import { singleDestination } from '../../../../interfaces/single-destination';
import { HomeserviceService } from '../../../../services/homeservice.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from '@angular/router';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
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
export class PackageDetailsComponent implements OnInit {
  rangePric:any
  range:any
  rangePriceMax:any
  minDay:any
  maxDay:any
  minRate:any
  MaxRate:any

// filter price
  minValue: number = 1;
  maxValue: number = 10000  ;
  options: Options = {
    floor: 0,
    ceil: 10000,
    step: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:

          this.rangePric = value
          this.rangePriceMax = value
          console.log(this.rangePric);

          // localStorage.setItem('rangeprice' , price)

          return "<b>Min :</b> $" + this.rangePric;
          
        case LabelType.High:
          this.rangePriceMax = value

          

          console.log(this.rangePriceMax);

          return "<b>Max :</b> $" + this.rangePriceMax;
          
          
          default:
          return "$" + value;
          

      }
    }
    
    
  };
  // filter Rate
  minValueRate: number = 1;
  maxValueRate: number = 5  ;
  optionsRate: Options = {
    floor: 1,
    ceil: 5,
    step: 1,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          // console.log(value);
          return "<i class='fas fa-star'></i>" + value;
          
        case LabelType.High:
          // console.log(value);

          return "<i class='fas fa-star'></i>" + value;
        default:
          return "<i class='fas fa-star'></i>" + value;
      }
    }
  };


// filter Days
minValueDays: number = 1;
maxValueDays: number = 6000  ;
optionsDays: Options = {
  floor: 1,
  ceil: 30,
  step: 1,
  translate: (value: number, label: LabelType): string => {
    switch (label) {
      case LabelType.Low:
        // console.log(value);
        return "Days : " + value;
        
      case LabelType.High:
        // console.log(MMM);
        return "Days : " + value;
      default:
        return "Days : " + value;
    }
  }
};


  max:number=5;
  rate = 1;
  rate2 = 2;
  rate3 = 3;
  rate4 = 4;
  rate5 = 5;

  count: any
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  modalService: any;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  image = "../../../../../../../assets/imgs/default.png"
  id: any;
  idpackage: any
  nameCountry = '';
  destinationContainer: singleDestination[] = []
  Filter:singleDestination[]=[]
  Title: any;
  category: string = '';
  x: number = 1;
  hot: any[] = []
  descount: any
  rangePrice:any
  price$:any;
  price:any
  tourType:any[]=['Family Friendly','Adventure or Sporting','Sightseeing','Combining','Spiritual'
  ,'Multi Country','Medical','Meditation','Romantic & Honeymoon','Indulgence & Luxury','Culinary, Food & Wine','Shore Excursion','Extended',]
  resetStar(): void {
    this.overStar = void 0;
  }
  // filter BY
  isCollapsed = false;
  isCollapsed2 = false;
  isCollapsed3 = false;
  isCollapsed4 = false;
  isCollapsed5 = true;
  isCollapsed6 = true;

  tourtype:any="";
  
  constructor(private _singleDes: HomeserviceService, private sanitizer: DomSanitizer,
    private _Meta: Meta,
    private _Title: Title,
    private _active: ActivatedRoute,
    private ngMod: NgbModal) { 
      this.id = this._active.snapshot.params.slug

      this._singleDes.getSingleDestinationFilter(this.id , 0 ,10000,1,30,1,5).subscribe(result => {
        this.Filter = result.data
        this.count = result.data.length
  
        console.log(this.Filter  );
        
        // this.id , 0 ,10000,this.minDay,this.maxDay,this.minRate,this.MaxRate
  
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
          { name: 'twitter:image', property: "og:image", content: `${result.data[0].destination_twitter_image}` },
          { name: 'facebook:image', property: "og:image", content: `${result.data[0].destination_facebook_image}` },
  
        ]);
      })
    }

    ngOnInit(): void {
    
      this._singleDes.getSingleDestination(this.id).subscribe(result => {
        this.destinationContainer = result.data
      })
      this._singleDes.getOneDestinationDetails(this.id).subscribe(res => {
        this.category = res.data[0].categories[1].slug
  
      })
    }
  
   
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  
  
  openVerticallyCentered(content: any) {
    this.ngMod.open(content, { centered: true });


  }
  rangePri1(val:any){
    this.rangePric = val.value
    this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 0 ,this.rangePrice || 10000 ,1,30,1,5).subscribe(result => {
      this.Filter = result.data
      this.count = result.data.length


    }) 
  }
  rangePri2(val:any){
    this.rangePrice = val.value
    this._singleDes.getSingleDestinationFilter(this.id , this.rangePric ,this.rangePrice,1,30,1,5).subscribe(result => {
      this.Filter = result.data
      this.count = result.data.length

    })
  }

  ratingMax(val:any){
    console.log(val.value);
    
  }

  
  check(type:any){
    console.log(type.value);
    
  }

  
  
}