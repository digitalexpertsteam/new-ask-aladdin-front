import { Component, OnInit } from '@angular/core';
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
  constructor(private _slider:HomeserviceService) { }

  ngOnInit(): void {
    this._slider.getSlider().subscribe(result => {
      this.sliderContainer = result.data
      console.log(result.data[2].image.type);
      if(result.data[0].image.type == "Image" ){
        this.image = result.data[0].image.type
        console.log(this.image);        
      }
      if(result.data[2].image.type == "Video"){
        this.video= result.data[2].image.type
        console.log(this.video);

      }
     
    })
  }

}
