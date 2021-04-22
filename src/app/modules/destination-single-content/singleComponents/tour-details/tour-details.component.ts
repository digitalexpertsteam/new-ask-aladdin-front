import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from '../../../../services/homeservice.service';



@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  lights:any = [];
  banener:any = [];
  contact:any=[];
  Title:any;
  Meta:any;

  id:any
  packName: any;
  desName: any;
  desSlug: any;
  idPack: any;
  overBanner:any;

  constructor( public highlights:HomeserviceService ,private _active:ActivatedRoute, private _Meta : Meta , private _Title : Title ) { }

  ngOnInit(): void {
    this.idPack = this._active.snapshot.params.slug
    this.id = this._active.snapshot.params.id

    
    this.highlights.getSinglepackage(this.idPack).subscribe(result => {
      this.lights = result.data[0]
      console.log(result.data[0]);
      
      this.banener = result.data[0]
      this.contact = result.data[0]
      this.Title = result.data[0].seo_title;
      this.highlights.getOneDestinationDetails(2).subscribe(res => {

        this.packName = res.data[0].categories[1].name  
        this.overBanner = result.data[0].image_over_banner;
        console.log(this.overBanner);
      })
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([

    
        { name: 'keywords', content: `${result.data[0].seo_keywords}` },
        { name: 'robots', content: `${result.data[0].seo_robots}` },
        { name: 'description', content: `${result.data[0].seo_description}`},
        { name: 'facebook:description', content: `${result.data[0].facebook_description}`},
        { name: 'twitter:title', content: `${result.data[0].twitter_title}`},
        { name: 'twitter:description', content: `${result.data[0].twitter_description}`},
        { name: "twitter:image", content: `${result.data[0].twitter_description}`},
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].twitter_image}`},
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].facebook_image}`},
        
      ]); 
      this.highlights.getOneDestinationDetails(2).subscribe(res => {

        this.packName = res.data[0].categories[1].name  
        
    }) 
    this.highlights.getSingleDestination(this.id).subscribe(result =>{
       
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;

      

    })

      
      
  

  })
}
  }
