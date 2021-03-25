import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';



@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  lights:any = [];

  constructor( public highlights:HomeserviceService) { }

  ngOnInit(): void {
    
    this.highlights.getTravelGuide(1).subscribe(result => {
      this.lights = result.data[0]
      
      
  

  })}
  

}
