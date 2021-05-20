import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { DomSanitizer, Meta, Title } from "@angular/platform-browser";
import { Excursions } from "../../../../interfaces/excursions";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { destination } from "../../../../interfaces/destination";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-travel-excursions-des",
  templateUrl: "./travel-excursions-des.component.html",
  styleUrls: ["./travel-excursions-des.component.css"],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class TravelExcursionsDesComponent implements OnInit {
  x = 1;
  max = 5;
  isReadonly = true;
  readonly = true
 
  // duration_in_days;
  num: any;
  name: any;
  overStar: number | undefined;
  percent: number | undefined;
  title: any;
  phone:any
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  id: any;
  idpackage: any;
  getDestinationExcursions: Excursions[] = [];
  exContent:destination[] = [];
  desName:any;
  desSlug:any;
  exName:any;
  count:any



  constructor(
    private _excursions: HomeserviceService,
    private _Active:ActivatedRoute,
    private sanitizer: DomSanitizer,

    private modalService: NgbModal,
    private _Meta : Meta ,
    private _Title : Title 
  ) {}

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this.id = this._Active.snapshot.params.slug;
    this._excursions.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
    this._excursions.getDestinationExcursions(this.id).subscribe(result => {
      this.getDestinationExcursions = result.data;

      this.desName = result.data[0].destination_name;

      this.desSlug = result.data[0].destination_slug;
      this.exName = result.data.excursion_name;
      this.name = result.data;
      this.count = result.data.length;

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
      this.exContent = res.data[0].categories;
      this.exName = res.data[0].categories[2].name;

           
    })
  }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  setId(id: any , price:any ){
    localStorage.setItem("idex", id);
    console.log(id);
    
    localStorage.setItem('price' , price)
  }


  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }


}
