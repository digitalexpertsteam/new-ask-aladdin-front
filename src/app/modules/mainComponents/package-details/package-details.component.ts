import { Component, OnInit } from '@angular/core';
import { singleDestination } from '../../../interfaces/single-destination';
import { HomeserviceService } from '../../../services/homeservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { setISODayOfWeek } from 'ngx-bootstrap/chronos/units/day-of-week';
@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

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
  resetStar(): void {
    this.overStar = void 0;
  }
  constructor(private _singleDes:HomeserviceService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id")
    this
    this._singleDes.getSingleDestination(this.id).subscribe(result =>{
      this.destinationContainer = result.data
      console.log(this.destinationContainer);
      
      
    })
  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  setId(id:any){
    localStorage.setItem('idPack' , id)
    
    
  }
}


