import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeserviceService } from '../../services/homeservice.service';
@Component({
  selector: 'app-egypt-splendor',
  templateUrl: './egypt-splendor.component.html',
  styleUrls: ['./egypt-splendor.component.css']
})
export class EgyptSplendorComponent implements OnInit {
  guide:any = [];
  id:any;
  selectTrue = true
  imageFalse= 'assets/imgs/wrong.svg';
  imageTrue='assets/imgs/right.svg';
  num : any;
  tour:any

  constructor(private _splendor:HomeserviceService , private _active:ActivatedRoute) { }
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
        items: 5
      }
    },
    nav: false
  }     
  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug
    this._splendor.getSinglepackage(this.id).subscribe(result => {
      this.guide = result.data[0];
      this.tour = result.data[0].tour_type;
      let x = 1
      this.num = result.data[0].days - x
  })}

  }