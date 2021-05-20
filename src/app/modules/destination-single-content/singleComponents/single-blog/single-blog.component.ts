import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "../../../../interfaces/blog";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { OwlOptions } from "ngx-owl-carousel-o";
import { destinationBlog } from "../../../../interfaces/destinationBlog";
import { Meta, Title } from "@angular/platform-browser";


@Component({
  selector: "app-single-blog",
  templateUrl: "./single-blog.component.html",
  styleUrls: ["./single-blog.component.css"],
})
export class SingleBlogComponent implements OnInit {
  singleBlog: Blog[] = [];
  idBlogs: any;
  id: any;
  alldestinationCards: destinationBlog[] = [];
  desSlug = "";
  desName='';

  ides :any;
  blogName:any;
  Title: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    public _homeService: HomeserviceService,
    private _Meta : Meta ,
    private _Title : Title
  ) {}

  ngOnInit(): void {
    // Get Id From Loacal Storage
    // this.idBlogs = localStorage.getItem("idBlog");
    this.idBlogs = this._ActivatedRoute.snapshot.params.id
    
     this.ides = localStorage.getItem("id");
    this.id = this._ActivatedRoute.snapshot.params.slug
    //  this._ActivatedRoute.snapshot.params.id;
    
    this._homeService.getSingleBlogs(this.idBlogs).subscribe((result) => {
      this.singleBlog = result.data;
      this.Title = result.data[0].seo_title;
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
      
    });
    this._homeService.getHomeBlog().subscribe((result) => {
      this.desSlug = result.data[0].destination_slug;
    });

    this._homeService.getDestinationBlogs(this.id).subscribe((res) => {
      this.alldestinationCards = res.data;
      
      
      this.desName = res.data[0].destination_name
    });

    this._homeService.getOneDestinationDetails(1).subscribe(res => {

      this.blogName = res.data[0].categories[4].name  
      
  })

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    pullDrag: true,
    margin: 8,
    dots: false,
    navSpeed: 700,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  setId(id: any) {
    localStorage.setItem("idBlog", id);
  }

}
