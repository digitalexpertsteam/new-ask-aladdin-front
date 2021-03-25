import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-hightlightes',
  templateUrl: './hightlightes.component.html',
  styleUrls: ['./hightlightes.component.css']
})
export class HightlightesComponent implements OnInit {

  lights:any
  id:any;

  constructor(private highlights:HomeserviceService) { }

  ngOnInit(): void {


    this.id = localStorage.getItem("id");
    this.highlights.getTravelGuide(this.id).subscribe(result => {
    this.lights = result.data[0].highlight
    
    
      
     
  

  })}
  }


  

