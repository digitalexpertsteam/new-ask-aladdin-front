import { Component, OnInit } from '@angular/core';
import { sponsors } from 'src/app/core/interfaces/sponsors';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  logo:sponsors[]=[]

  
  constructor(private _sponsors:HomeserviceService) { }

  ngOnInit(): void {
    this._sponsors.getLogo().subscribe(result => {
      this.logo = result.data
      
      
 
})
  
  }
  }
