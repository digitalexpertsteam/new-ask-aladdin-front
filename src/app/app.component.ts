import { Component , PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser , isPlatformServer  } from '@angular/common';
import { HomeserviceService } from './core/services/homeservice.service';
import { Meta, Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alaaddin';
  Title: any;
  constructor(private spinner: NgxSpinnerService , private seo:HomeserviceService ,private _meta:Meta ,private _title:Title ) {}

  ngOnInit()  {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();

    }, 1000);
    this.seo.globalSeo().subscribe(res => {
      this.Title = res.data[0].seo_title;
      this._title.setTitle(`${this.Title}`)

      this._meta.addTags([
        { name: 'keywords', content: `${res.data[0].seo_keywords}` },
        { name: 'robots', content: `${res.data[0].seo_robots}` },
        { name: 'description', content: `${res.data[0].seo_description}`},
        { name: 'description', content: `${res.data[0].seo_description}`},
        { name: 'facebook:description', content: `${res.data[0].facebook_description}`},
        { name: 'twitter:title', content: `${res.data[0].twitter_title}`},
        { name: 'twitter:description', content: `${res.data[0].twitter_description}`},
        { name: "twitter:image", content: `${res.data[0].twitter_description}`},
        { property:"og:image", content: `${res.data[0].twitter_image}`},
        { property:"og:image", content: `${res.data[0].facebook_image}`},
      ]);

      this.seo.getDestinationFact(1).subscribe(res => {
        if(res.data.destination_seo_title == null){

          this._title.setTitle(`${this.Title}`)
        }
      }

      )

    })

  }
  onActivate() {
    window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });


 }
}
