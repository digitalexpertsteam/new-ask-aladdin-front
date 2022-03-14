import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-one-destination',
  templateUrl: './one-destination.component.html',
  styleUrls: ['./one-destination.component.css']
})
export class OneDestinationComponent implements OnInit {

  id:any;
  singleDestination:destination[]=[]
  ides:any;
  categoryFooter:Category[]=[]


  singleDestinationContent:destination[]=[]
  packageOffer:destination[]=[]
  excursionsOffer:destination[]=[]
  cruisesOffer:destination[]=[]
  relatedPages:destination[]=[]
  Title:any;
  Meta:any;

  image = '../../../assets/imgs/Egypt-Shopping-Guide.jpg'
  errors: any;
  desSlug: any;
  phone:any


  constructor( private _Home : HomeserviceService ,
    private _active:ActivatedRoute   ,
     private _Meta : Meta ,
      private _Title : Title
      ) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug;

    this._Home.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
    this._Home.getOneDistination(this.id).subscribe(res => {
      this.singleDestination = res.data
      this.desSlug = res.data[0].slug


      this.Title = res.data[0].seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${res.data[0].seo_keywords}` },
        { name: 'robots', content: `${res.data[0].seo_robots}` },
        { name: 'description', content: `${res.data[0].seo_description}`},
        { name: 'facebook:description', content: `${res.data[0].facebook_description}`},
        { name: 'twitter:title', content: `${res.data[0].twitter_title}`},
        { name: 'twitter:description', content: `${res.data[0].twitter_description}`},
        { name: "twitter:image", content: `${res.data[0].twitter_description}`},
        { property:"og:image", content: `${res.data[0].twitter_image}`},
        { property:"og:image", content: `${res.data[0].facebook_image}`},

      ]);
      this.singleDestination.filter(idData => {
        let idDes = idData.id
        this._Home.getOneDestinationDetails(idDes).subscribe(result => {
          this.singleDestinationContent = result.data[0].categories;

            this.packageOffer = result.data[0].packages_hot_offers
            this.excursionsOffer = result.data[0].excursions_hot_offers
            this.cruisesOffer =result.data[0].cruises_hot_offers
            this.relatedPages = result.data[0].related_pages

        })
        this._Home.categoryFooter(idDes).subscribe(res => {
          this.categoryFooter = res.data

        })
      })

    })

  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay:true,
    autoplayTimeout:5000,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  customOwl: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay:true,
    autoplayTimeout:5000,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }


}