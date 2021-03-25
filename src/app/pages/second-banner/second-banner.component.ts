import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-second-banner',
  templateUrl: './second-banner.component.html',
  styleUrls: ['./second-banner.component.css']
})
export class SecondBannerComponent implements OnInit {

  banener:any = [];
  contact:any=[];
  id:any

  constructor(private _banner:HomeserviceService) { }
  

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    this. _banner.getTravelGuide(this.id).subscribe(result => {
      this.banener = result.data[0]
      
      
  
      this._banner.getSocials().subscribe(result => {
        this.contact = result.data[0]
        
        
      })
        
      
  

  })}
  }


