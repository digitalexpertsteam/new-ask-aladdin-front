import { Component, HostListener, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';
import { sponsors } from '../../interfaces/sponsors';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-sponsorss',
  templateUrl: './sponsorss.component.html',
  styleUrls: ['./sponsorss.component.css']
})
export class SponsorssComponent implements OnInit {

  logo:sponsors[]=[]

  
  constructor(private _sponsors:HomeserviceService) { }

  ngOnInit(): void {
    this._sponsors.getLogo().subscribe(result => {
      this.logo = result.data
      
      
 
})
  
  }
  }
