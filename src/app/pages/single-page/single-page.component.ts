import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Pages } from '../../interfaces/pages';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;
  singlePageContent:Pages[]=[];
  relatedPages:Pages[]=[]
  id:any;
  img=[];
  phone:any
  Title: any;
  slug: any;
  desName: any;
  desSlug: any;
  constructor(private _page : HomeserviceService ,  private _Active:ActivatedRoute , private _title:Title , private _meta:Meta)  { }
  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '825px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.slug = this._Active.snapshot.params.slug;
    this.id = this._Active.snapshot.params.id;
    this._page.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
    this._page.getSinglePage(this.slug).subscribe(res => {
      this.singlePageContent = res.data
      this.relatedPages = res.data[0].related_pages
      this.img=res.data[0].gallery
      this.galleryImages=[]
      this.img.forEach(ele => {
        
        this.galleryImages.push({
          small: ele,
          medium: ele,
          big: ele,
        }
        )
    })

    this.Title = res.data[0].seo_title;
      console.log(this.Title);
      this._title.setTitle(`${this.Title}`)
      this._meta.addTags([
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
  });
  this._page.categoryFooter(this.id).subscribe(res => {
    this.desName = res.data[0].destination_name;
    this.desSlug = res.data[0].destination_slug;
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

}
