import { Component, OnInit } from "@angular/core";

import { Faq } from "../../../../interfaces/faq";
import { Faqs } from "../../../../interfaces/faqs";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { OwlOptions } from "ngx-owl-carousel-o";

import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-single-faq",
  templateUrl: "./single-faq.component.html",
  styleUrls: ["./single-faq.component.css"],
})
export class SingleFaqComponent implements OnInit {
  singleFaq: Faq[] = [];
  idFaq: any;
  id: any;
  alldestinationCards: Faqs[] = [];
  desSlug = "";

  desName:any;
  faqName:any;
  Title: any;

  constructor(public _homeService: HomeserviceService,private _Active:ActivatedRoute , private _Meta : Meta ,
    private _Title : Title) {}

  ngOnInit(): void {
    // Get Id From Loacal Storage
    

    this.idFaq = this._Active.snapshot.params.slug
    this.id = this._Active.snapshot.params.id
    //  this._ActivatedRoute.snapshot.params.id;
    this._homeService.getSingleFaq(this.idFaq).subscribe((result) => {
      this.singleFaq = result.data;
    });

    

    this._homeService.getDestinationFact(this.id).subscribe(res => {
      this.alldestinationCards = res.data;
      this.desName =res.data[0].destination_name;
      this.desSlug =res.data[0].destination_slug;
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

      console.log(this.desName);
    });
    this._homeService.getOneDestinationDetails(this.id).subscribe(res => {

      this.faqName = res.data[0].categories[5].name  
      
  }) 
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

  setId(id: any) {
    localStorage.setItem("idFaq", id);
  }
}
