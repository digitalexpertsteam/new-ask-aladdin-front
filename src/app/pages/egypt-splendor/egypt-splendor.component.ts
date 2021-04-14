import { Component, OnInit } from '@angular/core';
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
  imageFalse= '';
  imageTrue='assets/imgs/right.svg';
  num : any;

  constructor(private _splendor:HomeserviceService) { }
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
    this.id = localStorage.getItem("idPack");
    this._splendor.getSinglepackage(this.id).subscribe(result => {
      this.guide = result.data[0];
     
      
      let x = 1
      this.num = result.data[0].days - x
     

  })}

  // setSlug(id:any)
  // {
  //   localStorage.setItem("idPack",id)

  // }

  }


  
