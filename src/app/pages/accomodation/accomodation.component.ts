import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  constructor(private _accomodation:HomeserviceService) { }

  accomodation:any = [];
  id:any;

  max = 5;
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  resetStar(): void {
    this.overStar = void 0;
  }
  ngOnInit(): void {


    this.id = localStorage.getItem("idPack");
    this._accomodation.getTravelGuide(this.id).subscribe(result => {
      this.accomodation = result.data[0];





  })}
  }