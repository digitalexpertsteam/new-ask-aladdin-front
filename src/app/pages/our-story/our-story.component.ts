import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from '../../services/homeservice.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Pages } from '../../interfaces/pages';
import { socials } from '../../interfaces/socials';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;
  singlePageContent:Pages[]=[];
  relatedPages:Pages[]=[]
  id:any;
  img=[];
  socialsContainer: socials[] = [];
  phone:any


  constructor(private _page : HomeserviceService ,  private _Active:ActivatedRoute) { }

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

    this.id = this._Active.snapshot.params.slug;
    this._page.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
    this._page.getSinglePage(`our-story`).subscribe(res => {
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
     })}

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
