import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { destinationBlog } from 'src/app/core/interfaces/destinationBlog';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  blogContainer:destinationBlog[] = []

  desSlug: string ='';
  category: string = '';
  id:any;
  
  constructor(private _blog:HomeserviceService) { }

  ngOnInit(): void {
    
    this._blog.getHomeBlog().subscribe(result => {
      this.blogContainer = result.data;
      this.desSlug = result.data[0].destination_slug;

    })
    this._blog.getOneDestinationDetails(1).subscribe(res => {
        this.category = res.data[0].categories[5].slug    
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay:true,
    autoplayTimeout:5000,
    pullDrag: true,
    margin:8,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }



}