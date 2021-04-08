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


  constructor(private _blogs:HomeserviceService , private _active:ActivatedRoute,private locate:Location,private _route:Router ,private _Meta : Meta , private _Title : Title ) {
    // this.id = this._active.snapshot.params.id
    // this._blogs.getDestinationGuides(this.id).subscribe(result => {
    // //  this.navigate = this.id.replace( this.id ,`${result.data[0].destination_slug}`) 
    // //   this.locate.replaceState(`${this.navigate}/travel-guide`)
    // //   // this.desSlug = result.data[0].destination_slug;
    // //   // this.desSlug = this.id
    // //   // console.log(result.data);
    // //   // this.locate.go(`${this.desSlug}/travel-guide`)
      
    // this.desSlug = result.data[0].destination_slug;

    // if(
    //   this.id = this._active.snapshot.params.id
    // ){
    //   this.id.replace(this.desSlug)
    // }
      
    // })
   

   }

  ngOnInit(): void {
    // this.id = this._active.snapshot.params.slug
    // console.log(this._active.snapshot.params.slug);
    this.id = localStorage.getItem('id')
    console.log(this.id);
    
    // this.locate.go(`${this.desSlug}/travel-guide`)
    
    

    this._blogs.getDestinationGuides(this.id).subscribe(result => {
      this.guidesContainer = result.data    
      console.log(this.guidesContainer);
       
      this.guide_name = result.data[0].destination_name + " Travel Guides";
      this.blogDes = result.data[0].destination_description;
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      
      // this.locate.go(`${this.desSlug}/travel-guide`)
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
      ]);
    }) 

    this._blogs.getOneDestinationDetails(this.id).subscribe(res => {
        this.allGuides = res.data[0].categories
        this.category = res.data[0].categories[0].slug    
        console.log(this.category);
        
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
