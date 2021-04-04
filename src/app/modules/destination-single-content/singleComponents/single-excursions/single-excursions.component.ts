import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-single-excursions',
  templateUrl: './single-excursions.component.html',
  styleUrls: ['./single-excursions.component.css']
})
export class SingleExcursionsComponent implements OnInit {



  lights:any = [];

  banener:any = [];
  contact:any=[];
  id:any
 
  selectTrue = true
  imageFalse= '';
  imageTrue='assets/imgs/right.svg';
  num : any;

  included:any=[]
  prices:any
  constructor(public _excursion:HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("idex");
    this._excursion.getSingleExcursion(this.id).subscribe(result => {

      this.included=result.data[0]
      this.prices=result.data[0]



 

  })
 
}

}
