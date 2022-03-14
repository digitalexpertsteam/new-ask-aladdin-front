import { Component, OnInit, ViewChild } from '@angular/core';
import { packages } from 'src/app/core/interfaces/package';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';




@Component({
  selector: 'app-home-tours',
  templateUrl: './home-tours.component.html',

  styleUrls: ['./home-tours.component.css']
})
export class HomeToursComponent implements OnInit {


  packageContainer:packages[] = []
  image = "../../../../../../assets/imgs/default.png"
  constructor(private _package:HomeserviceService) { }

  ngOnInit(): void {
    this._package.getPackages().subscribe(result => {
      this.packageContainer = result.data

    })
  }


  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e:any) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e:any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e:any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e:any) {
  //   console.log('beforeChange');
  // }


}
