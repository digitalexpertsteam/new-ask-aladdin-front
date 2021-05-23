import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Guide } from '../../../../interfaces/guide';
import { TravelGuide } from '../../../../interfaces/travel-guide';
import { HomeserviceService } from '../../../../services/homeservice.service';

@Component({
  selector: 'app-single-guide',
  templateUrl: './single-guide.component.html',
  styleUrls: ['./single-guide.component.css']
})
export class SingleGuideComponent implements OnInit {

  singleGuide: Guide[] = [];
  relatedGuide: Guide[] = [];
  relatedPages: Guide[] = [];
  idGuid: any;
  id: any;
  alldestinationCards: TravelGuide[] = [];
  desSlug = "";

  desName:any;
  GuideName:any;
  Title: any;

  constructor(public _homeService: HomeserviceService,
    private _Meta : Meta ,
    private _Title : Title,
    private _active : ActivatedRoute) {}

  ngOnInit(): void {
    // Get Id From Loacal Storage
    this.id =  this._active.snapshot.params.id;
    
    this.idGuid =  this._active.snapshot.params.slug;

    this._homeService.getSingleGuide(this.idGuid).subscribe(result => {
      this.singleGuide= result.data;
      this.relatedGuide = result.data[0].related_travel_guides;
      this.relatedPages = result.data[0].related_pages
      this.Title = result.data[0].seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].seo_keywords}` },
        { name: 'robots', content: `${result.data[0].seo_robots}` },
        { name: 'description', content: `${result.data[0].seo_description}`},
        { name: 'facebook:description', content: `${result.data[0].facebook_description}`},
        { name: 'twitter:title', content: `${result.data[0].twitter_title}`},
        { name: 'twitter:description', content: `${result.data[0].twitter_description}`},
        { name: "twitter:image", content: `${result.data[0].twitter_description}`},
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].twitter_image}`},
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].facebook_image}`},
        
      ]); 
      
    });

    

    this._homeService.getDestinationGuides(this.id).subscribe((res) => {
      this.alldestinationCards = res.data;
      this.desSlug = res.data[0].destination_slug
      this.desName = res.data[0].destination_name
      let idName = res.data[0].destination__id
      this._homeService.getOneDestinationDetails(idName).subscribe(res => {

        this.GuideName = res.data[0].categories[0].name  
        
    })
    });
    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    pullDrag: true,
    margin: 8,
    dots: false,
    navSpeed: 700,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    pullDrag: true,
    margin: 8,
    dots: false,
    navSpeed: 700,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  

}