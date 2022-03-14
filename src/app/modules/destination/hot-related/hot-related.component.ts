import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-hot-related',
  templateUrl: './hot-related.component.html',
  styleUrls: ['./hot-related.component.css']
})
export class HotRelatedComponent implements OnInit {

  id:any;
  singleDestination:destination[]=[]
  ides:any;
  categoryFooter:Category[]=[]


  singleDestinationContent:destination[]=[]
  packageOffer:destination[]=[]
  excursionsOffer:destination[]=[]
  cruisesOffer:destination[]=[]
  relatedPages:destination[]=[]
  Title:any;
  Meta:any;

  image = '../../../assets/imgs/Egypt-Shopping-Guide.jpg'
  errors: any;
  desSlug: any;
  phone:any


  constructor( private _Home : HomeserviceService ,
    private _active:ActivatedRoute   ,
      ) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug;

    this._Home.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
    this._Home.getOneDistination(this.id).subscribe(res => {
      this.singleDestination = res.data
      this.desSlug = res.data[0].slug


      this.singleDestination.filter(idData => {
        let idDes = idData.id
        this._Home.getOneDestinationDetails(idDes).subscribe(result => {
          this.singleDestinationContent = result.data[0].categories;

            this.packageOffer = result.data[0].packages_hot_offers
            this.excursionsOffer = result.data[0].excursions_hot_offers
            this.cruisesOffer =result.data[0].cruises_hot_offers
            this.relatedPages = result.data[0].related_pages


        })
        this._Home.categoryFooter(idDes).subscribe(res => {
          this.categoryFooter = res.data

        })
      })

    })

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
    nav: false
  }


}
