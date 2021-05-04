import { Component,HostListener, OnInit } from '@angular/core';
import { packages } from '../../interfaces/package';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-tour-slider',
  templateUrl: './tour-slider.component.html',
  styleUrls: ['./tour-slider.component.css']
})
export class TourSliderComponent implements OnInit {

  packagesContainer:packages[] = []
  cellsToShow:number = 4;
  height:number = 400;
  arrowsOutside:boolean = false;
  max = 5;
  rate = 3;
  isReadonly = false;
  overStar: number | undefined;
  percent: number | undefined;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  resetStar(): void {
    this.overStar = void 0;
  }
  @HostListener("window:resize", []) updateDays() {
    // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
    // md (for small laptops - screens equal to or greater than 992px wide)
    // sm (for tablets - screens equal to or greater than 768px wide)
    // xs (for phones - screens less than 768px wide)
  
    if (window.innerWidth >= 1200) {
      this.cellsToShow = 4; // lg
    } else if (window.innerWidth >= 992) {
      this.cellsToShow = 3;//md
    } else if (window.innerWidth  >= 768) {
      this.cellsToShow = 1;//sm
    } else if (window.innerWidth < 768) {
      this.cellsToShow = 1;//xs
    }
    
  }
  constructor(private _packages:HomeserviceService) { }

  ngOnInit(): void {
    this._packages.getPackages().subscribe(result => this.packagesContainer = result.data)
  }

}
