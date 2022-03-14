import { Component, OnInit, ViewChild } from '@angular/core';

import { Blog } from '../../../core/interfaces/blog';
import { sliders } from '../../../core/interfaces/sliders';
import { HomeserviceService } from '../../../core/services/homeservice.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent ;


  slideConfig = {slidesToShow: 1,
  slidesToScroll: 1 ,
  autoplay: true,
  autoplaySpeed: 5000,

};

HomeConfig = {slidesToShow: 1,
  slidesToScroll: 1 ,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,

};
  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }


  img="../../../../../assets/imgs/default.png"
  desSlug:any
  term: any;
  imgCondation = false
  image = [{
    img:``,
    title:``,
    small_text:``

  }]
  videos = [{
    video:``,
    title:``,
    small_text:``,
  }]
   imageSlide:sliders[]=[]

  sliderContainer: sliders[] = [];
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

  slides = [
    {title: "Egypt Package Deals" , small_text: `Book now and pay later for 2021  and Join thousands of satisfied travelers who <br> have experienced our Luxury Private Guided Trips!`},
    {title: "EGYPT TRAVEL EXPERTS" , small_text: `Book now and pay later for 2021  and Join thousands of satisfied travelers who <br> have experienced our Luxury Private Guided Trips!`},
  ];






  constructor(private _slider: HomeserviceService) { }



  ngOnInit(): void {
    this._slider.getSlider().subscribe(result => {
      this.sliderContainer = result.data

      this.imageSlide = result.data

      this.imageSlide.forEach(ele => {

        if (ele.image.type == "Video") {
          this.imgCondation = !this.imgCondation
          this.videos.push({
            video:`${ele.image.url}`,
            title:`${ele.title}`,
            small_text:`${ele.small_text}`
          })

        }
        if (ele.image.type == "Image") {
          this.image.push({
            img:`${ele.image.url}`,
            title:`${ele.title}`,
            small_text:`${ele.small_text}`
          })

        }

      })


    })


  }


  termS(term: any) {
    this._slider.search(term).subscribe(result => {

      this.blogs = result.data.blogs
      this.destinations = result.data.destinations
      this.desSlug = result.data.destinations[0].slug


      this.package = result.data.package
      this.cruise = result.data.cruise
      this.excursion = result.data.excursion
      this.category = result.data.category
      this.faq = result.data.faq
      this.hotel = result.data.hotel
      this.page = result.data.page
      this.travel_guide = result.data.travel_guide





    })
  }



}
