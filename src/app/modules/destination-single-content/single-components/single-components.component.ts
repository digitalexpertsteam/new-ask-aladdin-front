import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from '../../../services/homeservice.service';
@Component({
  selector: 'app-single-components',
  templateUrl: './single-components.component.html',
  styleUrls: ['./single-components.component.css']
})
export class SingleComponentsComponent implements OnInit {

  guide = false
  package = false
  excursions = false
  cruises = false
  hotels = false
  facts = false
  blogs = false
  idBlog:any;
  slug: any
  constructor(private active: ActivatedRoute , private _home: HomeserviceService) { }

  ngOnInit(): void {
    this.idBlog = localStorage.getItem('idBlog')
    this.slug = localStorage.getItem('slug')

    console.log(this.slug);
    
    this._home.getSingleBlogs(this.idBlog).subscribe(blog => {     
      console.log(blog.data[0].slug); 
      this.active.params.subscribe(data => {
        if (data.slug == blog.data[0].slug) {
          this.blogs = true  
        }
      })
    })
        // if (data.slug == res.data[0].categories[1].slug) {
        //   this.package = true
        // }
        // if (data.slug == res.data[0].categories[2].slug) {
        //   this.excursions = true
        // }
        // if (data.slug == res.data[0].categories[3].slug) {
        //   this.cruises = true
        // }
        // if (data.slug == res.data[0].categories[4].slug) {
        //   this.hotels = true
        // }
        // if (data.slug == res.data[0].categories[5].slug) {
        //   this.blogs = true
        // }
        // if (data.slug == res.data[0].categories[6].slug) {
        //   this.facts = true
        // }
       
      
      
    }
  }
  


