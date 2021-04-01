import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})

export class HomeserviceService {

  currentLang:string='';
  constructor(private _http:HttpClient,public translate: TranslateService) {
    //ngx translate
    this.currentLang=localStorage.getItem('currentLang') ||'en';
    this.translate.use(this.currentLang);
   }
   //ngx translate
  

  changeCurrentLang(lang:string )
  {
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang);
  }
  //End ngx translate

  getSlider(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}sliders/${this.currentLang}`);
  }
  getAlldestination():Observable<any> {
    return this._http.get(`${environment.ApiUrl}destinations/${this.currentLang}`);
  }
  getBlogs():Observable<any>{
    return this._http.get(`${environment.ApiUrl}blog/1/${this.currentLang}`)
  }
  getDestinationEgy():Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/blogs/1/${this.currentLang}`)
  }
  getSingleBlogs(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}blog/${id}/${this.currentLang}`)
  }
  getDestinationBlogs(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/blogs/${id}/${this.currentLang}`)
  }
  getPackages():Observable<any>{
     return this._http.get(`${environment.ApiUrl}packages/${this.currentLang}`)
  }
  getAboutAs():Observable<any>{
    return this._http.get(`${environment.ApiUrl}abouts/${this.currentLang}`)
  }
  getSocials():Observable<any>{
    return this._http.get(`${environment.ApiUrl}socials/${this.currentLang}`)
  }
  getSingleDestination(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/packages/${id}/${this.currentLang}`)
  }
  // getSingleDestinationDetails(id:any , pack:string):Observable<any>{
  //   return this._http.get(`${environment.ApiUrl}destination/${pack}/${id}/${this.currentLang}`)
  // }
  getOneDistination(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/${id}/${this.currentLang}`)
  }

 
  getOneDestinationDetails(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}categories/${id}/${this.currentLang}`)
  }

  getTravelGuide(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}package/${id}/${this.currentLang}`)
  }
  getDestinationExcursions(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/excursions/${id}/${this.currentLang}`)
  }
  getSingleExcursion(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}excursion/${id}/${this.currentLang}`)
  }
}
