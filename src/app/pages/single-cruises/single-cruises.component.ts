import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import { HomeserviceService } from '../../services/homeservice.service';
import { Blog } from '../../interfaces/blog';
import {Gallery} from 'angular-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-single-cruises',
  templateUrl: './single-cruises.component.html',
  styleUrls: ['./single-cruises.component.css']
})
export class SingleCruisesComponent implements OnInit {
  Itinerary(){
    document.getElementById('Itinerary')?.scrollIntoView({behavior:'smooth'})
  }
  trav(){
    document.getElementById('trav')?.scrollIntoView({behavior:'smooth'})
  }
  
  accomodation(){
    document.getElementById('accomodation')?.scrollIntoView({behavior:'smooth'})
  }
  Services(){
    document.getElementById('Services')?.scrollIntoView({behavior:'smooth'})
  }
  Gallery(){
    document.getElementById('Gallery')?.scrollIntoView({behavior:'smooth'})
  } 
  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;
  lights:any = [];
  banener:any = [];
  contact:any=[];
  idCru:any;
  id:any
  desSlug:any
  related:Blog[]=[];
  selectTrue = true
  imageFalse= '';
  imageTrue='assets/imgs/right.svg';
  num : any;
  img=[];
  max = 5;
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  included:any=[]
  prices:any
  startPrices:any
  cruises:any
  galery:any
  ttt:any
  constructor(public _cruises:HomeserviceService,  private gallery: Gallery) { }
  ngOnInit(): void {
    
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
    this.idCru = localStorage.getItem("idcru");
    this.id = localStorage.getItem('id')
    this._cruises.getTravelCruises(this.id).subscribe(result => {
      this.desSlug = result.data[0].destination_slug;  

    });
    this._cruises.getSingleCruise(this.idCru).subscribe(result => {
      this.cruises = result.data[0]; 
      this.ttt = result.data[0].hotels; 
      
      this.galery = result.data[0].gallery; 

      this.related = result.data[0].related_cruises; 
      
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
    })
  }
  setId(id:any){
    localStorage.setItem('idcru' , id)
  }
}
