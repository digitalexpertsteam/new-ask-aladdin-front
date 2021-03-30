import { Injectable } from '@angular/core';

import {Title , Meta} from '@angular/platform-browser'
import { DestinationSeo } from '../interfaces/destination-seo';
import { HomeserviceService } from './homeservice.service';


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  Title:DestinationSeo[]=[]
  Meta:DestinationSeo[]=[]
  id:any;
  

  constructor( private _Meta : Meta , private _Title : Title , private _home:HomeserviceService) { 
    this.id = localStorage.getItem('id')
    this._home.getSingleDestinationDetails(this.id).subscribe(res => {
      this.Title = res.data[0].seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${res.data[0].seo_keywords}` },
	      { name: 'robots', content: `${res.data[0].seo_robots}` },
        { name: 'description', content: `${res.data[0].seo_description}`},
      ]);
    })
    
  }


   
}
