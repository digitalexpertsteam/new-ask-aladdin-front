import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private _http:HttpClient) { }
  getSlider(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}sliders/en`);
  }
  getAlldestination():Observable<any> {
    return this._http.get(`${environment.ApiUrl}destinations/en`);
  }
  getBlogs():Observable<any>{
    return this._http.get(`${environment.ApiUrl}blogs/en`)
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
}
