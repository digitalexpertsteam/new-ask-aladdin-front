import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { Hotel } from 'src/app/core/interfaces/hotel';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

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

  panner:any
  pannerDescription:any

  id: any
  max: any
  isReadonly = true;

  constructor(private _hotel: HomeserviceService,
    private _Meta : Meta ,
    private _active: ActivatedRoute,
    private _Title : Title) { }


  ngOnInit(): void {
    this.id = this._active.snapshot.params.hotel
 this._hotel.getSingleHotel(this.id).subscribe(result => {
      this.hotel = result.data;
      this.panner = result.data[0].banner;
      this.pannerDescription = result.data[0].description;
      this.panner = result.data[0].banner;



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

