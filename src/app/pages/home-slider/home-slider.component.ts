import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces/image';
import { sliders } from '../../interfaces/sliders';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  image:any;
  video='';
   sliderContainer:sliders[] = []
   imageSlide:Image[]=[]
  constructor(private _slider:HomeserviceService) { }

  ngOnInit(): void {
    this._slider.getSlider().subscribe(result => {
      this.sliderContainer = result.data
      this.imageSlide = result.data.image
      
      
      // if(result.data.image.type == "Video"){
      //   this.video= result.data.image.type
      //   console.log(this.video);

      // }
     
    })
    
    
  }
  

}
