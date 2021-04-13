import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";
import { Excursions } from "../../../../interfaces/excursions";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { destination } from "../../../../interfaces/destination";

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
  isReadonly = false;
  // duration_in_days;
  num: any;
  name: any;
  overStar: number | undefined;
  percent: number | undefined;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  id: any;
  idpackage: any;
  getDestinationExcursions: Excursions[] = [];
  exContent:destination[] = [];
  desName:any;
  exName:any;


  constructor(
    private _excursions: HomeserviceService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this._excursions.getDestinationExcursions(this.id).subscribe(result => {
      this.getDestinationExcursions = result.data;
      this.desName = result.data[0].destination_name;
      this.exName = result.data.excursion_name;
      this.name = result.data;
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
    localStorage.setItem('price' , price)
  }


  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }


}
