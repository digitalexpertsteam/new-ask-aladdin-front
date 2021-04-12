import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Guide } from '../../../../interfaces/guide';
import { TravelGuide } from '../../../../interfaces/travel-guide';
import { HomeserviceService } from '../../../../services/homeservice.service';

@Component({
  selector: 'app-single-guide',
  templateUrl: './single-guide.component.html',
  styleUrls: ['./single-guide.component.css']
})
export class SingleGuideComponent implements OnInit {

  singleGuide: Guide[] = [];
  relatedGuide: Guide[] = [];
  relatedPages: Guide[] = [];
  idGuid: any;
  id: any;
  alldestinationCards: TravelGuide[] = [];
  desSlug = "";
  desName:any;
  GuideName:any;

  constructor(public _homeService: HomeserviceService) {}

  ngOnInit(): void {
    // Get Id From Loacal Storage
    this.idGuid = localStorage.getItem("idGuid");
    this.id = localStorage.getItem("id");
    //  this._ActivatedRoute.snapshot.params.id;
    this._homeService.getSingleGuide(this.idGuid).subscribe(result => {
      this.singleGuide= result.data;
      this.relatedGuide = result.data[0].related_travel_guides;
      this.relatedPages = result.data[0].related_pages
      
    });
    

    this._homeService.getDestinationGuides(this.id).subscribe((res) => {
      this.alldestinationCards = res.data;
      this.desSlug = res.data[0].destination_slug
      this.desName = res.data[0].destination_name

    });
    this._homeService.getOneDestinationDetails(this.id).subscribe(res => {

      this.GuideName = res.data[0].categories[0].name  
      
  })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    pullDrag: true,
    margin: 8,
    dots: false,
    navSpeed: 700,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    pullDrag: true,
    margin: 8,
    dots: false,
    navSpeed: 700,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  setId(id: any) {
    localStorage.setItem("idGuid", id);
  }

}