import { Component, OnInit } from '@angular/core';
import { singleDestination } from '../../../../interfaces/single-destination';
import { HomeserviceService } from '../../../../services/homeservice.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { setISODayOfWeek } from 'ngx-bootstrap/chronos/units/day-of-week';
@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {
  x=1;
  max = 5;
  rate = 3;
  isReadonly = false;
  overStar: number | undefined;
  percent: number | undefined;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  id:any;
  idpackage:any
  destinationContainer:singleDestination[] = []
  Title:any;
  category: string = ''; 

  resetStar(): void {
    this.overStar = void 0;
  }
  constructor(private _singleDes:HomeserviceService, private sanitizer:DomSanitizer , private _Meta : Meta , private _Title : Title) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id")
    this
    this._singleDes.getSingleDestination(this.id).subscribe(result =>{
      this.destinationContainer = result.data
      console.log(this.destinationContainer);
      this.Title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
      ]);
      
      
    })
    this.id = localStorage.getItem('id')
    this._singleDes.getOneDestinationDetails(this.id).subscribe(res => {
        this.category = res.data[0].categories[1].slug    
        console.log(this.category);
        
    })
  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  setId(id:any){
    localStorage.setItem('idPack' , id)
    console.log(id);
    
    
    
  }
}


