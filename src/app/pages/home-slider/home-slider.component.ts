import { Component, OnInit } from '@angular/core';
import { sliders } from 'src/app/interfaces/sliders';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  
   sliderContainer:sliders[] = []
  constructor(private _slider:HomeserviceService) { }

  ngOnInit(): void {
    this._slider.getSlider().subscribe(result => this.sliderContainer = result.data)
  }

}
