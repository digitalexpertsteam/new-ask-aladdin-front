import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
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

  constructor( 
    private _excursions: HomeserviceService,
    private _Active:ActivatedRoute , 
     private modalService: NgbModal) { }

  x = 1;
  max = 5;
  isReadonly = false;
  // duration_in_days;
  num: any;
  name: any;
  desName=''
  cruContent:destination[]=[];
  cruName:any;

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
      this.desName=result.data[0].destination_name;  
      console.log(this.desName);
      
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