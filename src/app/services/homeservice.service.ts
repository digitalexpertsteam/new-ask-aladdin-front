import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})

export class HomeserviceService {

  constructor(private _http:HttpClient,public translate: TranslateService) {
    //ngx translate
    this.currentLang=localStorage.getItem('currentLang') ||'en';
    this.translate.use(this.currentLang);
   }
   //ngx translate
  currentLang:string='';

  changeCurrentLang(lang:string )
  {
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang);
  }
  //End ngx translate

  getSlider(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}sliders/en`);
  }
  getAlldestination():Observable<any> {
    return this._http.get(`${environment.ApiUrl}destinations/en`);
  }
  getBlogs():Observable<any>{
    return this._http.get(`${environment.ApiUrl}blog/1/en`)
  }
  getDestinationEgy():Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/blogs/1/en`)
  }
  getSingleBlogs(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}blog/${id}/en`)
  }
  getDestinationBlogs(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/blogs/${id}/en`)
  }
  getPackages():Observable<any>{
     return this._http.get(`${environment.ApiUrl}packages/en`)
  }
  getAboutAs():Observable<any>{
    return this._http.get(`${environment.ApiUrl}abouts/en`)
  }
  getSocials():Observable<any>{
    return this._http.get(`${environment.ApiUrl}socials/en`)
  }
  getSingleDestination(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/packages/${id}/en`)
  }
  getOneDistination(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/${id}/en`)
  }

  getOneDestinationContent():Observable<any>{
    return this._http.get(`${environment.ApiUrl}content/destination/1/en`)
  }
  getOneDestinationDetails(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}content/destination/${id}/en`)
  }
}
