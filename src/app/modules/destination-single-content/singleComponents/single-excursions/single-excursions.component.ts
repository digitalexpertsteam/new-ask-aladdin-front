import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../../../services/homeservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

import {Gallery} from 'angular-gallery';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';



@Component({
  selector: 'app-single-excursions',
  templateUrl: './single-excursions.component.html',
  styleUrls: ['./single-excursions.component.css']
})
export class SingleExcursionsComponent implements OnInit {


  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;

  lights:any = [];
  banener:any = [];
  contact:any=[];
  idex:any;
  id:any;
 
  selectTrue = true
  imageFalse= '';
  imageTrue='assets/imgs/right.svg';
  num : any;

  img=[];
  desSlug:any
  included:any=[]
  prices:any
  startPrices:any
  constructor(public _excursion:HomeserviceService, private gallery: Gallery, ) { }

  
  ngOnInit(): void {


    this.galleryOptions = [
      {
        width: '825px',
        height: '400px',
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

    // this.galleryImages = [
    //   {
    //     small: this.img,
    //     medium: this.img,
    //     big: this.img
    //   },


    // ];
    

    
  // ------------------------------------------------

    this.startPrices = localStorage.getItem('price')
    this.idex = localStorage.getItem("idex");
    this.id = localStorage.getItem('id')

    this._excursion.getSingleExcursion(this.idex).subscribe(result => {

      this.included=result.data[0]
      this.prices=result.data[0]
      this.img=result.data[0].gallery
      this.img.forEach(ele => {
        this.galleryImages = [ {
            small: ele,
            medium: ele,
            big: ele,
          },
          {
            small: ele,
            medium: ele,
            big: ele,          
          },
          {
            small: ele,
            medium: ele,
            big: ele,       
          },
  ]; 
})     
  })

  this._excursion.getDestinationExcursions(this.id).subscribe(result => {
    this.desSlug = result.data[0].destination_slug;
  });
}
setid(id:any)
{
  localStorage.setItem("idex", id);

}

}
