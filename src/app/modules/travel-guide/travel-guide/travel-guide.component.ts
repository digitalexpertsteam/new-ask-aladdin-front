import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { destination } from 'src/app/core/interfaces/destination';
import { TravelGuide } from 'src/app/core/interfaces/travel-guide';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-travel-guide',
  templateUrl: './travel-guide.component.html',
  styleUrls: ['./travel-guide.component.css']
})
export class TravelGuideComponent implements OnInit {

  guidesContainer:TravelGuide[] = [];
  guide_name: any;
  blogBanner: string = `../../../assets/imgs/5b14a68e3de5a.jpg`
  blogDes: string = '';
  desName: string = '';
  desSlug: string ='';
  category: string = '';
  title!: String;
  id:any;
  slug:any
  allGuides:destination[]=[];
  navigate:any;
  desId: any;
  name: any;


  constructor(private _blogs:HomeserviceService , private _active:ActivatedRoute,private _route:Router ,private _Meta : Meta , private _Title : Title ) {


   }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug
    this._blogs.getDestinationGuides(this.id).subscribe(result => {
      this.guidesContainer = result.data
      this.guide_name = result.data[0].destination_name + " Travel Guides";
      this.blogDes = result.data[0].destination_description;
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      this.desId = result.data[0].destination__id;
      this._blogs.getOneDestinationDetails(this.desId).subscribe(res => {
        this.allGuides = res.data[0].categories
        this.category = res.data[0].categories[0].slug
        this.name  = res.data[0].categories[0].name
    })
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
        { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
        { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
        { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
        { property:"og:image", content: `${result.data[0].destination_twitter_image}` },
        { property:"og:image", content: `${result.data[0].destination_facebook_image}` },
      ]);
    })



    window.addEventListener('load' ,()=> {
     return this.id = this._active.snapshot.params.slug
    })


    }
    ngOnDestroy(): void {
      this.id = this._active.snapshot.params.slug


    }




}
