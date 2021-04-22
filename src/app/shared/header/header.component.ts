import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HomeserviceService } from "../../services/homeservice.service";
import { destination } from "../../interfaces/destination";
import { socials } from "../../interfaces/socials";
import { Blog } from '../../interfaces/blog';
import { sliders } from '../../interfaces/sliders';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  socialsContainer: socials[] = [];
  destinationContainer: destination[] = [];
  desSlug:any
  term: any;
  img="../../../../../assets/imgs/default.png"

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




  currentLang:string='';
  Languages = [
  {lnaguage:"English" ,image:"assets/imgs/en.png"},
  {lnaguage:"French" , image:"assets/imgs/fr.png"},
  {lnaguage:"Spanish" , image:"assets/imgs/es.png"},
  {lnaguage:"German" , image:"assets/imgs/de.png"},
  {lnaguage:"Russian" , image:"assets/imgs/ru.png"},


]

  textLang='';
  imgLang ='';



  constructor(public translate: TranslateService,public header:HomeserviceService) { 
    this.currentLang=localStorage.getItem('currentLang') ||'en';
    this.translate.use(this.currentLang);
    this.header.getSocials().subscribe((result) => (this.socialsContainer = result.data));
  }


  ngOnInit(): void {
    this.header.getSlider().subscribe(result => {
      this.sliderContainer = result.data
      this.imageSlide = result.data.image


    })
  }

  changeCurrentLang( lang:any , i:any )
{
 this.Languages.forEach(data => {

 })
  
  this.translate.use(lang);
  localStorage.setItem('currentLang',lang);
  this.textLang = i.text 
  console.log(this.imgLang);
  location.reload();
}


termS(term: any) {
  this.header.search(term).subscribe(result => {

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

