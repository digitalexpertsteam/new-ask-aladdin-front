import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cruises } from 'src/app/core/interfaces/cruises';
import { Hotel } from 'src/app/core/interfaces/hotel';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {
  @Input() cruise = false;
  @Input() package = false;
  desName: any;
  desSlug: any;
  slug: any;
  cruises: Hotel[] = [];
  idCruise: any;

  constructor(private _accomodation: HomeserviceService, private _active: ActivatedRoute) { }

  accomodation: any = [];
  id: any;
  idhotel: any;
  // id pack
  idPack: any
  max = 5;
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  flag1: any
  flag2: any
  flag3: any
  flag4: any



  ngOnInit(): void {

    this.id = this._active.snapshot.params.id

    this.slug = this._active.snapshot.params.slug

    this.idCruise = this._active.snapshot.params.cruis

    if (this.package == true) {
      this._accomodation.getSinglepackage(this.slug).subscribe(result => {
        this.accomodation = result.data[0];
        this.flag1 = result.data[0].standard_hotels
        this.flag2 = result.data[0].comfort_hotels
        this.flag3 = result.data[0].deluxe_hotels
        this.flag4 = result.data[0].cruise_hotels
      })
    }
    this._accomodation.getSingleDestination(this.id).subscribe(res => {
      this.desName = res.data[0].destination_name
      this.desSlug = res.data[0].destination_slug
    })

    // cruises Api
    if(this.cruise == true){
      this._accomodation.getSingleCruise(this.idCruise).subscribe(result => {
        this.cruises = result.data[0].hotels;

      })
    }

  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    margin: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    pullDrag: true,
    dots: true,

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
        items: 4
      },
      940: {
        items: 4
      }

    },
    nav: false

  }


}
