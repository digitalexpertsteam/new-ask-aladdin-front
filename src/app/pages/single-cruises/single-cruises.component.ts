import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import { HomeserviceService } from '../../services/homeservice.service';
import { Blog } from '../../interfaces/blog';
import {Gallery} from 'angular-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-cruises',
  templateUrl: './single-cruises.component.html',
  styleUrls: ['./single-cruises.component.css']
})
export class SingleCruisesComponent implements OnInit {
  desName: any;
  cruName: any;
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
  Deafult = `../../../assets/imgs/the-best-10-river-nile-cruises-in-egypt.jpg`
  desSlug:any
  related:Blog[]=[];
  selectTrue = true
  imageFalse= 'assets/imgs/wrong.svg';
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
  constructor(public _cruises:HomeserviceService,  private gallery: Gallery , private active:ActivatedRoute) { }
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
    this.idCru = this.active.snapshot.params.slug
    this.id = this.active.snapshot.params.id
    console.log(this.id , this.idCru);
    
    this._cruises.getTravelCruises(this.id).subscribe(result => {
      this.desSlug = result.data[0].destination_slug;  
      this.desName = result.data[0].destination_name;  
      let idName = result.data[0].destination__id; 
      this._cruises.getOneDestinationDetails(idName).subscribe(res => {

        this.cruName = res.data[0].categories[3].name  
        
    })

    });
    this._cruises.getSingleCruise(this.idCru).subscribe(result => {
      this.cruises = result.data[0]; 
      if(this.cruises.banner == 1){
        
        
        this.cruises.banner = this.Deafult
      }
      console.log(this.cruises.banner);

      console.log(this.cruises);
      
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
