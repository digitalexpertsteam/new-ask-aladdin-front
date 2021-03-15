import { Injectable } from '@angular/core';

import {Title , Meta} from '@angular/platform-browser'


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  Title: any;
  Meta:any;

  constructor( private _Meta : Meta , private _Title : Title) { 
    this.Title = this._Title;
    this.Meta = this._Meta;
  }

  
  
}
