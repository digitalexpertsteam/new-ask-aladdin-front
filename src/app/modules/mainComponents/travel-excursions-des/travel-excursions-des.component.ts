import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../../services/homeservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Excursions } from '../../../interfaces/excursions';
@Component({
  selector: 'app-travel-excursions-des',
  templateUrl: './travel-excursions-des.component.html',
  styleUrls: ['./travel-excursions-des.component.css']
})
export class TravelExcursionsDesComponent implements OnInit {


  max = 5;
  isReadonly = false;
  // duration_in_days;
  num : any;
  night:any=[];
  overStar: number | undefined;
  percent: number | undefined;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  id:any;
  idpackage:any
  getDestinationExcursions:Excursions[] = []

  constructor(private _excursions:HomeserviceService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id")
    this._excursions.getDestinationExcursions(this.id).subscribe(result =>{
      this.getDestinationExcursions = result.data
      console.log(this.getDestinationExcursions);
      
      
    })
  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  setId(id:any){
    localStorage.setItem('idPack' , id)
    
    
  }
  
    
  
}
