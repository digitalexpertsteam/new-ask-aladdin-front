import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../../services/homeservice.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
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
  Title:any;
  constructor(private _excursions:HomeserviceService, private sanitizer:DomSanitizer , private _Meta : Meta , private _Title : Title) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id")
    this._excursions.getDestinationExcursions(this.id).subscribe(result =>{
      this.getDestinationExcursions = result.data
      console.log(this.getDestinationExcursions);
      this.Title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
      ]);
      
      
    })
  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  setId(id:any){
    localStorage.setItem('idPack' , id)
    
    
  }
  
    
  
}
