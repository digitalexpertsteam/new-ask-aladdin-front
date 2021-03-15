import { Component, HostListener, OnInit } from '@angular/core';
import { destination } from 'src/app/interfaces/destination';
import { HomeserviceService } from 'src/app/services/homeservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-one-destination',
  templateUrl: './one-destination.component.html',
  styleUrls: ['./one-destination.component.css']
})
export class OneDestinationComponent implements OnInit {
  id:any;
  singleDestination:destination[]=[]
  // itemsPerSlide = 3;
  // singleSlideOffset = true;
  // noWrap = false;
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  customOwl: OwlOptions = {
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
        items: 2
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

  
  
  
  constructor( private _Home : HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this._Home.getOneDistination(this.id).subscribe(res => {
      this.singleDestination = res.data  
    })
  }

}


