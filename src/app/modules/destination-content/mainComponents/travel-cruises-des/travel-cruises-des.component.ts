import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { DomSanitizer, Meta, Title } from "@angular/platform-browser";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { destination } from '../../../../interfaces/destination';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-travel-cruises-des',
  templateUrl: './travel-cruises-des.component.html',
  styleUrls: ['./travel-cruises-des.component.css']


})
export class TravelCruisesDesComponent implements OnInit {
  title: any;

  constructor( 
    private _excursions: HomeserviceService,
    private _Active:ActivatedRoute , 
     private modalService: NgbModal,
     private _Meta:Meta , private _Title:Title ) { }

  x = 1;
  max = 5;
  isReadonly = false;
  // duration_in_days;
  num: any;
  name: any;
  desName=''
  desSlug:any;
  cruContent:destination[]=[];
  cruName:any;
  count:any

readonly = true
  overStar: number | undefined;
  percent: number | undefined;

  cruises:any
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  id: any;
  idpackage: any;

  ngOnInit(): void {

    this.id = this._Active.snapshot.params.slug
    this._excursions.getTravelCruises(this.id).subscribe((result) => {
      this.cruises = result.data;
      this.count = result.data.length;

      this.desName=result.data[0].destination_name;  
      this.desSlug = result.data[0].destination_slug ;
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
        { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
        { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
        { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].destination_twitter_image}` },
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].destination_facebook_image}` },

      ]);
    });

    this._excursions.getOneDestinationDetails(1).subscribe(res => {
      this.cruContent = res.data[0].categories;
      this.cruName = res.data[0].categories[3].name;

           
    })
  }

  // transform(url: any) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }
  setId(id: any) {
    localStorage.setItem("idcru", id);
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

}