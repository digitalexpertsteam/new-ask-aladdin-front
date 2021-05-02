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
  flag:any
  
  ngOnInit(): void {


    this.id = localStorage.getItem("idPack");
    this._accomodation.getSinglepackage(this.id).subscribe(result => {
      this.accomodation = result.data[0];
      this.flag = result.data[0].hotels






  })}
  }