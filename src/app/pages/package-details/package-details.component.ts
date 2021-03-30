import { Component, OnInit } from '@angular/core';
import { singleDestination } from '../..//interfaces/single-destination';
import { HomeserviceService } from '../..//services/homeservice.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  max = 5;
  rate = 3;
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
  destinationContainer:singleDestination[] = []
  resetStar(): void {
    this.overStar = void 0;
  }
  constructor(private _singleDes:HomeserviceService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id")
    this._singleDes.getSingleDestination(this.id).subscribe(result =>this.destinationContainer = result.data)
    // this._singleDes.getSingleDestination(this.id).subscribe(result =>this.night = result.data)
    //   let x = 1;
    //   this.num = this.night.data[0].duration_in_days - x
    //   console.log(this.num);
      
      
    
  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}