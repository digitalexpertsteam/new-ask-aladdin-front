import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-hightlightes',
  templateUrl: './hightlightes.component.html',
  styleUrls: ['./hightlightes.component.css']
})
export class HightlightesComponent implements OnInit {

  lights:any = [];

  constructor(private highlights:HomeserviceService) { }

  ngOnInit(): void {


    this.highlights.getTravelGuide(1).subscribe(result => {
      this.lights = result.data[0]
      
      
  

  })}
  }


  

