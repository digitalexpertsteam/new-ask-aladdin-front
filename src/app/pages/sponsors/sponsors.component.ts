import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  cellsToShow:number = 5;
  arrowsOutside:boolean = false;
  height:number = 132;
  loop:boolean=true;
  autoplay:boolean=true;
  images = [
    {path: '../../../assets/imgs/1.png'},
    {path: '../../../assets/imgs/5.jpg'},
    {path: '../../../assets/imgs/6.jpg'},
    {path: '../../../assets/imgs/logo-spon.jpg'},
    {path: '../../../assets/imgs/sponsor.jpg'},
    {path:'../../../assets/imgs/2 (1).jpg'}
]
@HostListener("window:resize", []) updateDays() {
  // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
  // md (for small laptops - screens equal to or greater than 992px wide)
  // sm (for tablets - screens equal to or greater than 768px wide)
  // xs (for phones - screens less than 768px wide)

  if (window.innerWidth >= 1200) {
    this.cellsToShow = 3; // lg
  } else if (window.innerWidth >= 992) {
    this.cellsToShow = 3;//md
  } else if (window.innerWidth  >= 768) {
    this.cellsToShow = 1;//sm
  } else if (window.innerWidth < 768) {
    this.cellsToShow = 1;//xs
  }
}
  constructor() { }
  ngOnInit(): void {
  }


}
