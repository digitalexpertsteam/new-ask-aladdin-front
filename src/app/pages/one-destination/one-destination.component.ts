import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { destination } from '../../interfaces/destination';
import { HomeserviceService } from '../../services/homeservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-one-destination',
  templateUrl: './one-destination.component.html',
  styleUrls: ['./one-destination.component.css']
})
export class OneDestinationComponent implements OnInit {
  id:any;
  singleDestination:destination[]=[]

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
 
  constructor( private _Home : HomeserviceService , private route : Router   , private _Meta : Meta , private _Title : Title ) { }
 
  ngOnInit(): void {
    this.id = localStorage.getItem('id');

    this._Home.getOneDistination(this.id).subscribe(res => {
      this.singleDestination = res.data  
      this.Title = res.data[0].seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${res.data.seo_keywords}` },
        { name: 'robots', content: `${res.data.seo_robots}` },
        { name: 'description', content: `${res.data.seo_description}`},
      ]);
    })
    this._Home.getOneDestinationDetails(this.id).subscribe(res => {
      this.singleDestinationContent = res.data[0].categories;
        this.packageOffer = res.data[0].packages_hot_offers 
        this.excursionsOffer = res.data[0].excursions_hot_offers
        this.cruisesOffer =res.data[0].cruises_hot_offers
        this.relatedPages = res.data[0].related_pages
       
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
