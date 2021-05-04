import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../../interfaces/hotel';
import { HomeserviceService } from '../../../../services/homeservice.service';
import { NgxGalleryAnimation, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.css']
})
export class SingleHotelComponent implements OnInit {
  Title: any;
  Itinerary() {
    document.getElementById('Itinerary')?.scrollIntoView({ behavior: 'smooth' })
  }
  Location() {
    document.getElementById('Location')?.scrollIntoView({ behavior: 'smooth' })
  }

  accomodation() {
    document.getElementById('accomodation')?.scrollIntoView({ behavior: 'smooth' })
  }
  Services() {
    document.getElementById('Services')?.scrollIntoView({ behavior: 'smooth' })
  }
  gallery() {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }
  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;
  hotel: Hotel[] = []
  img=[];

  id: any
  max: any
  isReadonly = true;

  constructor(private _hotel: HomeserviceService,
    private _Meta : Meta ,
    private _active: ActivatedRoute,
    private _Title : Title) { }


  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug
    console.log(this.id);
    
    this._hotel.getSingleHotel(this.id).subscribe(result => {
      this.hotel = result.data;
      console.log(this.hotel);
      
      this.img=result.data[0].gallery
      this.galleryImages=[]
      this.img.forEach(ele => {
        
        this.galleryImages.push({
          small: ele,
          medium: ele,
          big: ele,
        }
        )
}) 
      this.galleryOptions = [
        {
          width: '825px',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
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
      this.Title = result.data.seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data.seo_keywords}` },
        { name: 'robots', content: `${result.data[0].seo_robots}` },
        { name: 'description', content: `${result.data[0].seo_description}`},
        { name: 'facebook:description', content: `${result.data[0].facebook_description}`},
        { name: 'twitter:title', content: `${result.data[0].twitter_title}`},
        { name: 'twitter:description', content: `${result.data[0].twitter_description}`},
        { name: "twitter:image", content: `${result.data[0].twitter_description}`},
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].twitter_image}`},
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].facebook_image}`},
        
      ]); 
    })

  }



}
