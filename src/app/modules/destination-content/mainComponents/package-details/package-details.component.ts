import { Component, enableProdMode, OnInit, ViewEncapsulation } from '@angular/core';
import { singleDestination } from '../../../../interfaces/single-destination';
import { HomeserviceService } from '../../../../services/homeservice.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from '@angular/router';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { filter } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  max:number=5;
  rate = 1;
  lolo=2;



  
   
  

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
  rating :any
  public form : FormGroup 

  constructor(private _singleDes: HomeserviceService, private sanitizer: DomSanitizer,
    private _Meta: Meta,
    private _Title: Title,
    private _active: ActivatedRoute,
    private fb: FormBuilder,
    private ngMod: NgbModal) { 
      this.form = this.fb.group({
        rating:['',Validators.required]

      })
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
    star(val:any){
      console.log(val);
      
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
  