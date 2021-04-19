import { Component, HostListener, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { destination } from '../../interfaces/destination';
import { HomeserviceService } from '../../services/homeservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Meta, Title } from '@angular/platform-browser';
import { mergeMap } from 'rxjs/operators';



@Component({
  selector: 'app-one-destination',
  templateUrl: './one-destination.component.html',
  styleUrls: ['./one-destination.component.css']
})
export class OneDestinationComponent implements OnInit {
  id:any;
  singleDestination:destination[]=[]
  ides:any;

  singleDestinationContent:destination[]=[]
  packageOffer:destination[]=[]
  excursionsOffer:destination[]=[]
  cruisesOffer:destination[]=[]
  relatedPages:destination[]=[]
  Title:any;
  Meta:any;

  image = '../../../assets/imgs/Egypt-Shopping-Guide.jpg'
  
  // itemsPerSlide = 3;
  // singleSlideOffset = true;
  // noWrap = false;
 
  constructor( private _Home : HomeserviceService ,
    private _active:ActivatedRoute   ,
     private _Meta : Meta ,
      private _Title : Title 
      ) { }
 
  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug;

    this._Home.getOneDistination(this.id).subscribe(res => {
      this.singleDestination = res.data  
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
        { name: 'twitter:image', property:"og:image", content: `${res.data[0].twitter_image}`},
        { name: 'facebook:image', property:"og:image", content: `${res.data[0].facebook_image}`},
        
      ]);
      this.singleDestination.filter(idData => {
        let idDes = idData.id
        this._Home.getOneDestinationDetails(idDes).subscribe(result => {
          this.singleDestinationContent = result.data[0].categories;
          console.log(this.singleDestinationContent);
          
            this.packageOffer = result.data[0].packages_hot_offers 
            this.excursionsOffer = result.data[0].excursions_hot_offers
            this.cruisesOffer =result.data[0].cruises_hot_offers
            this.relatedPages = result.data[0].related_pages
           
        })
      })
      
    })
  }

  setSlug(slug:any){
     localStorage.setItem("slug" , slug)  
    
    
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
