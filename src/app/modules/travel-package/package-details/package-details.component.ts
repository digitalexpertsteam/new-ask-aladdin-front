import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { destination } from 'src/app/core/interfaces/destination';
import { singleDestination } from 'src/app/core/interfaces/single-destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';
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
  max:number=5;
  revType = true;
  rate = 1;
  packageContent:destination[] = []
  packName:any;
  desName:any;
  id:any;
  desSlug:any;
  phone:any
  rangeMDay:any;
  rangeSDay: any;
  count: any
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  modalService: any;
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
  rangePrice:any
  price$:any;
  price:any
  catSlug:any
  tourType:any[]=['Family Friendly','Adventure or Sporting','Sightseeing','Combining','Spiritual'
  ,'Multi Country','Medical','Meditation','Romantic &Honeymoon','Indulgence & Luxury','Culinary, Food & Wine','Shore Excursion','Extended',]
  // filter BY
  isCollapsed = false;
  isCollapsed2 = false;
  isCollapsed3 = true;

  categoryPack = [
  {name:"Land only Tours" ,
  pack_slug:"land-only-tours"
  },
  {name:"3-7 Nights Packages" ,
    pack_slug:"3-7-nights-packages"
  },
  {name:"8-14 Nights Packages" ,
  pack_slug:"8-14-nights-packages"
  },
  {name:"15-20 Nights Packages" ,
   pack_slug:"15-20-nights-packages"
  },
  {name:"Egypt & Jordan" ,
   pack_slug:"egypt-jordan"
  },
  {name:"Package With Flights" ,
   pack_slug:"package-with-flights"
  },
  {name:"Nile Cruise Packages" ,
   pack_slug:"nile-cruise-packages"
  },
  {name:"Dahabiya Packages" ,
  pack_slug:"dahabiya-packages"
},
  {name:"Meditation Trips (Groups Only)" ,
   pack_slug:"meditation-trips-groups-only"
  },
]

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }


  resetStar(): void {
    this.overStar = void 0;
  }


  tourtype:any="";
  rating :any
  public form : FormGroup

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

      this._singleDes.getSingleDestinationFilter(this.id , 0 ,10000,1,30,1,5).subscribe(result => {
        this.Filter = result.data

        this.count = result.data.length
           this.desSlug = result.data[0].destination_slug
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
  //  RANGE DAYS
rangeStartDay(minD:any){
  this.rangeSDay = minD.value;


  this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 0 ,this.rangePrice || 10000  ,this.rangeSDay,30,1,5).subscribe(result => {
    this.Filter = result.data;
    this.count = result.data.length;


  })
}
rangeEndDay(val:any){
  this.rangeMDay = val.value;

  this._singleDes.getSingleDestinationFilter(this.id , this.rangePric || 0 , this.rangePrice || 10000 ,this.rangeSDay||1,this.rangeMDay,1,5).subscribe(result => {
    this.Filter = result.data;
    this.count = result.data.length;

  })
}




}
