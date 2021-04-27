 import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "../../environments/environment.prod";


@Injectable({
  providedIn: "root",
})
export class HomeserviceService {
  currentLang: string = "";
  constructor(private _http: HttpClient, public translate: TranslateService) {
    //ngx translate
    this.currentLang = localStorage.getItem("currentLang") || "en";
    this.translate.use(this.currentLang);
  }
  //ngx translate

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("currentLang", lang);
  }
  //End ngx translate

  getSlider(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}sliders/${this.currentLang}`);
  }

  getAlldestination(): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destinations/${this.currentLang}`
    );
  }
  
  
  getBlogs(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}blog/1/${this.currentLang}`);
  }
  getDestinationEgy(): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destination/blogs/1/${this.currentLang}`
    )
  }
  getSingleBlogs(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}blog/${id}/${this.currentLang}`
    )
  }
  getDestinationBlogs(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destination/blogs/${id}/${this.currentLang}`
    );
  }
  getPackages(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}packages/${this.currentLang}`);
  }
  getAboutAs(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}abouts/${this.currentLang}`);
  }
  getSocials(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}socials/${this.currentLang}`);
  }
  getSingleDestination(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destination/packages/${id}/${this.currentLang}`
    );
  }
  getSingleDestinationDetails(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destination/${id}/${this.currentLang}`
    )
  }
  getStaticDes(): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}categories/1/${this.currentLang}`
    )
  }

  getOneDistination(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destination/${id}/${this.currentLang}`
    );
  }
  getOneDestinationDetails(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}categories/${id}/${this.currentLang}`
    );

  }

  getSinglepackage(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}package/${id}/${this.currentLang}`
    );
  }
  getDestinationFact(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destination/faqs/${id}/${this.currentLang}`
    );
  }
  getSingleFaq(id: any): Observable<any> {
    return this._http.get(`${environment.ApiUrl}faq/${id}/${this.currentLang}`);
  } 

  getDestinationGuides(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}destination/travel-guides/${id}/${this.currentLang}`
    );
  }
  getSingleGuide(id: any): Observable<any> {
    return this._http.get(`${environment.ApiUrl}travel-guide/${id}/${this.currentLang}`);
  }

  getHomeBlog(): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}home/blog/1/${this.currentLang}`
    );
  }

  getPage(id:any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}${id}/pages/${this.currentLang}`);
    }

    getSinglePage(id:any):Observable<any>{
      return this._http.get(
        `${environment.ApiUrl}page/${id}/en`
      )
    }



  getDestinationExcursions(id: any): Observable<any> {
    return this._http.get(`${environment.ApiUrl}destination/excursions/${id}/${this.currentLang}`
    )
  }
  getSingleExcursion(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}excursion/${id}/${this.currentLang}`
    );
  }

  getTravelCruises(id: any): Observable<any> {
    return this._http.get(`${environment.ApiUrl}destination/cruises/${id}/${this.currentLang}`
    );  
  }

  getSingleCruise(id: any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}cruise/${id}/${this.currentLang}`
    );
  }
  Counter(): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}counter`
    );
  }

  getSingleHotel(id:any): Observable<any> {
    return this._http.get(
      `${environment.ApiUrl}hotel/${id}/${this.currentLang}`
    );
  }

  getLogo(): Observable<any> {
    return this._http.get(`${environment.ApiUrl}testimonials`);
  }
  search(term:string): Observable<any> {
    return this._http.get(`${environment.ApiUrl}search/${term}/${this.currentLang}`
    );
  }

  categoryFooter(id:any):Observable<any>{
    return this._http.get(`${environment.ApiUrl}destination/footer/${id}/${this.currentLang}`)
  }



}



