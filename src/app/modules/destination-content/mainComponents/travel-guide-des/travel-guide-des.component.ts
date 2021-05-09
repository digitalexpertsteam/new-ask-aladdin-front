import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { destination } from '../../../../interfaces/destination';
import { destinationBlog } from '../../../../interfaces/destinationBlog';
import { TravelGuide } from '../../../../interfaces/travel-guide';
import { HomeserviceService } from '../../../../services/homeservice.service';

@Component({
  selector: 'app-travel-guide-des',
  templateUrl: './travel-guide-des.component.html',
  styleUrls: ['./travel-guide-des.component.css']
})
export class TravelGuideDesComponent implements OnInit , OnDestroy {

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


  constructor(private _blogs:HomeserviceService , private _active:ActivatedRoute,private locate:Location,private _route:Router ,private _Meta : Meta , private _Title : Title ) {

 
   }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.id
   
    
    
    

    this._blogs.getDestinationGuides(this.id).subscribe(result => {
      this.guidesContainer = result.data    
      console.log(this.guidesContainer[0].travel_guide_thumb);
       
      this.guide_name = result.data[0].destination_name + " Travel Guides";
      this.blogDes = result.data[0].destination_description;
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      this.desId = result.data[0].destination__id;
      this._blogs.getOneDestinationDetails(this.desId).subscribe(res => {
        this.allGuides = res.data[0].categories
        this.category = res.data[0].categories[0].slug    
        console.log(this.allGuides[0].thump);
        
    })
      // this.locate.go(`${this.desSlug}/travel-guide`)
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
        { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
        { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
        { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].destination_twitter_image}` },
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].destination_facebook_image}` },
      ]);
    }) 

    
    this._blogs.getPage(101).subscribe(res => {
      console.log(res.data);
      
    })
    window.addEventListener('load' ,()=> {
     return this.id = this._active.snapshot.params.id
    })
    
    
    }
    ngOnDestroy(): void {
      this.id = this._active.snapshot.params.id

      
    }
    setId(id:any){
      localStorage.setItem("idGuid", id );
    } 
    
    

}
