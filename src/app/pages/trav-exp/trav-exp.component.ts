import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';


@Component({
  selector: 'app-trav-exp',
  templateUrl: './trav-exp.component.html',
  styleUrls: ['./trav-exp.component.css']
})
export class TravExpComponent implements OnInit {

  ex:any = [];

  constructor(private experiance:HomeserviceService) { }

  ngOnInit(): void {
    

    this.experiance.getTravelGuide(1).subscribe(result => {
      this.ex = result.data[0]
      
      
  

  })}
  }


