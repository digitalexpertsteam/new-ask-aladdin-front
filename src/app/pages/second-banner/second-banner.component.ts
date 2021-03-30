import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-second-banner',
  templateUrl: './second-banner.component.html',
  styleUrls: ['./second-banner.component.css']
})
export class SecondBannerComponent implements OnInit {


  id:any

  constructor(private _banner:HomeserviceService) { }
  

  ngOnInit(): void {

    this.id = localStorage.getItem("idPack");
    this. _banner.getTravelGuide(this.id).subscribe(result => {
     
      
      
  
      this._banner.getSocials().subscribe(result => {
       
        
        
      })
        
      
  

  })}
  }


