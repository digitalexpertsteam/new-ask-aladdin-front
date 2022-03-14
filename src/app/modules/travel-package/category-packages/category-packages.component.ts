import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { destination } from 'src/app/core/interfaces/destination';
import { singleDestination } from 'src/app/core/interfaces/single-destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-category-packages',
  templateUrl: './category-packages.component.html',
  styleUrls: ['./category-packages.component.css']
})
export class CategoryPackagesComponent implements OnInit {


  max:number=5;
  rate = 1;

  count: any
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  modalService: any;
  cat: any;
  rangeSDay: any;
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
  categorypack:singleDestination[]=[]
  Title: any;
  category: string = '';
  x: number = 1;
  hot: any[] = []
  descount: any
  price$:any;
  price:any
  packageContent:destination[] = []
  phone:any
  package_name:any

packName:any
  tourType:any[]=['Family Friendly','Adventure or Sporting','Sightseeing','Combining','Spiritual'
  ,'Multi Country','Medical','Meditation','Romantic & Honeymoon','Indulgence & Luxury','Culinary, Food & Wine','Shore Excursion','Extended',]
  resetStar(): void {
    this.overStar = void 0;
  }

  ide:any
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
      this.ide = this._active.snapshot.params.ide
      this.cat = this._active.snapshot.params.cat
      this.id = this._active.snapshot.params.slug

      this._singleDes.getSingleDestinationFilter(this.id , 0 ,10000,1,30,1,5).subscribe(result => {
        this.Filter = result.data
        this.count = result.data.length



        this.descount = result.data.discount + "%"
        this.hot = result.data.hot_offer
        this.nameCountry = result.data.destination_name;
        this.Title = result.data.destination_seo_title;
        this._Title.setTitle(`${this.Title}`)
        this._Meta.addTags([
          { name: 'keywords', content: `${result.data.destination_seo_keywords}` },
          { name: 'robots', content: `${result.data.destination_seo_robots}` },
          { name: 'description', content: `${result.data.destination_seo_description}` },
          { name: 'facebook:description', content: `${result.data.destination_facebook_description}` },
          { name: 'twitter:title', content: `${result.data.destination_twitter_title}` },
          { name: 'twitter:description', content: `${result.data.destination_twitter_description}` },
          { name: 'twitter:image', property: "og:image", content: `${result.data.destination_twitter_image}` },
          { name: 'facebook:image', property: "og:image", content: `${result.data.destination_facebook_image}` },

        ]);
      })
    }



    ngOnInit(): void {


      this._singleDes.getSingleDestination(this.id).subscribe(result => {
        this.destinationContainer = result.data
      })


      this._singleDes.getCategoryPackage(this.ide,this.cat).subscribe(result => {
        this.categorypack = result.data

        this.package_name = result.data.package_name

        this.count = result.data.length
        this.packName=result.data.categorypack


      })


      this._singleDes.getSocials().subscribe(result => {
        this.phone = result.data[0].phone1
      });


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






}
