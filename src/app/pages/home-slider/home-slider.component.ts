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
  image = [{
    img:``,
    title:``,
    small_text:``

  }]
  videos = [{
    video:``
  }]
   sliderContainer:sliders[] = []
   imageSlide:sliders[]=[]

  constructor(private _slider:HomeserviceService) { }

  ngOnInit(): void {
    this._slider.getSlider().subscribe(result => {
      this.sliderContainer = result.data
      this.imageSlide = result.data
      
      this.imageSlide.forEach(ele => {
        if (ele.image.type == "Video") {
          
          this.videos.push({
            video:`${ele.image.url}`
          }) 
          console.log(this.videos);
          
        }
        if (ele.image.type == "Image") {
          
          this.image.push({
            img:`${ele.image.url}`,
            title:`${ele.title}`,
            small_text:`${ele.small_text}`
          })
         
          console.log(this.image);
        }
        
      })
      
     
    })
    
    
  }
  

}
