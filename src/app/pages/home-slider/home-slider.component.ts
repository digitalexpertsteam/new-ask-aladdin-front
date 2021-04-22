import { Component, OnInit } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { Image } from '../../interfaces/image';
import { search } from '../../interfaces/search';
import { sliders } from '../../interfaces/sliders';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  image: any;
  img="../../../../../assets/imgs/default.png"
  video = '';
  desSlug:any
  term: any;
  sliderContainer: sliders[] = [];
  imageSlide: Image[] = [];
  blogs: Blog[] = [];
  destinations: Blog[] = [];
  package: Blog[] = [];
  cruise: Blog[] = [];

  faq: Blog[] = [];
  excursion: Blog[] = [];
  category: Blog[] = [];
  hotel: Blog[] = [];
  page: Blog[] = [];
  travel_guide: Blog[] = [];








  constructor(private _slider: HomeserviceService) { }

  ngOnInit(): void {
    this._slider.getSlider().subscribe(result => {
      this.sliderContainer = result.data
      this.imageSlide = result.data.image


      // this._slider.search("egypt").subscribe(result => {

      //   this.search = result.data
      //   console.log(this.search);
      // })

      // 
      // 





      // if(result.data.image.type == "Video"){
      //   this.video= result.data.image.type
      //   console.log(this.video);

      // }

    })


  }
  termS(term: any) {
    this._slider.search(term).subscribe(result => {

      this.blogs = result.data.blogs
      this.destinations = result.data.destinations
      this.desSlug = result.data.destinations[0].slug
      console.log(this.desSlug);
      
      this.package = result.data.package
      this.cruise = result.data.cruise
      this.excursion = result.data.excursion
      this.category = result.data.category
      this.faq = result.data.faq
      this.hotel = result.data.hotel
      this.page = result.data.page
      this.travel_guide = result.data.travel_guide





      console.log(this.destinations);
    })
  }




}
