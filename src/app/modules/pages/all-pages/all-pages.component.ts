import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Pages } from 'src/app/core/interfaces/pages';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-pages',
  templateUrl: './all-pages.component.html',
  styleUrls: ['./all-pages.component.css']
})
export class AllPagesComponent implements OnInit {
  pagesContent:Pages[]=[];
  id:any;
  genral_data: any;
  category_name: any;
  category_slug: any;
  category_description: any;
  destination_slug: any;
  category_banner: any;
  Title: any;
  constructor(private _Page:HomeserviceService , private _active:ActivatedRoute, private _Meta : Meta ,private _Title : Title
    ) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.page
    this._Page.getPage(this.id).subscribe(res => {
      this.genral_data=res.$genral_data
      this.category_name=res.$genral_data.category_name
      this.category_slug=res.$genral_data.category_slug
      this.category_description=res.$genral_data.category_description
      this.category_banner=res.$genral_data.category_banner
      this.destination_slug=res.$genral_data.destination_slug
      this.pagesContent = res.data


      this.Title = res.seo_data.seo_title;

      this._Title.setTitle(`${this.Title}`)

      this._Meta.addTags([
        { name: 'keywords', content: `${res.seo_data.seo_keywords}` },
        { name: 'robots', content: `${res.seo_data.seo_robots}` },
        { name: 'description', content: `${res.seo_data.seo_description}`},
        { name: 'facebook:description', content: `${res.seo_data.facebook_description}`},
        { name: 'twitter:title', content: `${res.seo_data.twitter_title}`},
        { name: 'twitter:description', content: `${res.seo_data.twitter_description}`},
        { name: "twitter:image", content: `${res.seo_data.twitter_description}`},
        { name: 'twitter:image', property:"og:image", content: `${res.seo_data.twitter_image}`},
        { name: 'facebook:image', property:"og:image", content: `${res.seo_data.facebook_image}`},

      ]);
      console.log(res.seo_data.seo_robots);




    })
  }

}
