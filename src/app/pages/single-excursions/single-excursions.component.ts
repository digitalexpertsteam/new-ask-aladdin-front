import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';


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
  excursion:any=[];

  constructor(public _excursion:HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("idPack");
    this._excursion.getTravelGuide(this.id).subscribe(result => {
      this.lights = result.data[0]
      this.banener = result.data[0]
      this.contact = result.data[0]


      
      


  })

  

}
  
  

  

}
