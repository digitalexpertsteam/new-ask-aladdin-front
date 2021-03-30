import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';



@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  lights:any = [];
  banener:any = [];
  contact:any=[];

  id:any
  constructor( public highlights:HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("idPack");
    this.highlights.getTravelGuide(this.id).subscribe(result => {
      this.lights = result.data[0]
      this.banener = result.data[0]
      this.contact = result.data[0]

      
      
  

  })}
  

}
