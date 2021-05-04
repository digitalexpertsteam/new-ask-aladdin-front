import { Component, HostListener, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';
import { sponsors } from '../../interfaces/sponsors';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-sponsorss',
  templateUrl: './sponsorss.component.html',
  styleUrls: ['./sponsorss.component.css']
})
export class SponsorssComponent implements OnInit {

  logo:sponsors[]=[]

  cellsToShow:number = 4;
  arrowsOutside:boolean = false;
  height:number = 132;
  loop:boolean=true;
  logos:sponsors[]=[]
  autoplay:boolean=true;
  images = [
    {path:''}
  ]
  galleryImages=[]
@HostListener("window:resize", []) updateDays() {
  // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
  // md (for small laptops - screens equal to or greater than 992px wide)
  // sm (for tablets - screens equal to or greater than 768px wide)
  // xs (for phones - screens less than 768px wide)

  if (window.innerWidth >= 1200) {
    this.cellsToShow = 4; // lg
  } else if (window.innerWidth >= 992) {
    this.cellsToShow = 3;//md
  } else if (window.innerWidth  >= 768) {
    this.cellsToShow = 1;//sm
  } else if (window.innerWidth < 768) {
    this.cellsToShow = 1;//xs
  }
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
      items: 1
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
  constructor(private _sponsors:HomeserviceService) { }

  ngOnInit(): void {
    this._sponsors.getLogo().subscribe(result => {
      this.logo = result.data
      
      
 
})
  
  }
  }
