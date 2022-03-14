import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cruises } from 'src/app/core/interfaces/cruises';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-splander',
  templateUrl: './splander.component.html',
  styleUrls: ['./splander.component.css']
})
export class SplanderComponent implements OnInit {
  @Input() cruise = false;
  @Input() package = false;
  @Input() excur = false;
  guide:any = [];
  id:any;
  selectTrue = true
  imageFalse= 'assets/imgs/wrong.svg';
  imageTrue='assets/imgs/right.svg';
  num : any;
  tour:any
  SplanderCruises: any;
  cruis: any;
  days: Cruises[] = [];
  idExc: any;

  constructor(private _splendor:HomeserviceService
    ,private _active: ActivatedRoute,) { }
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
    this.id = this._active.snapshot.params.slug;
    this.cruis = this._active.snapshot.params.cruis;

    if(this.package == true){
    this._splendor.getSinglepackage(this.id).subscribe(result => {
      this.guide = result.data[0];

      this.tour = result.data[0].tour_type;

      let x = 1
      this.num = result.data[0].days - x
  })
}
  if(this.cruise == true){
    this._splendor.getSingleCruise(this.cruis).subscribe(result => {
      this.SplanderCruises = result.data[0]
      this.days = result.data[0].day_data;



    })
  }

  this.idExc = this._active.snapshot.params.excursion
  if(this.excur == true){
    this._splendor.getSingleExcursion(this.idExc).subscribe(result => {
      this.guide = result.data[0];
  })
  }


}

  }
