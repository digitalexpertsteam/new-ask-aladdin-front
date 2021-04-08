import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Blog } from '../../interfaces/blog';
import { destinationBlog } from '../../interfaces/destinationBlog';
import { HomeserviceService } from '../../services/homeservice.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  
})
export class BlogComponent implements OnInit {

  blogContainer:destinationBlog[] = []

  desSlug: string ='';
  category: string = '';
  id:any;
  
  constructor(private _blog:HomeserviceService) { }

  ngOnInit(): void {
    
    this._blog.getHomeBlog().subscribe(result => {
      this.blogContainer = result.data;
      this.desSlug = result.data[0].destination_slug;
      console.log(result.data[0].destination_slug);

    })
    this.id = localStorage.getItem('id')
    this._blog.getOneDestinationDetails(this.id).subscribe(res => {
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

  setId(id:any){
    localStorage.setItem('idBlog' , id)
  }

}
