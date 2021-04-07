import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Blog } from "../../../../interfaces/blog";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { OwlOptions } from "ngx-owl-carousel-o";
import { destinationBlog } from "../../../../interfaces/destinationBlog";


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

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    public _homeService: HomeserviceService
  ) {}

  ngOnInit(): void {
    // Get Id From Loacal Storage
    this.idBlogs = localStorage.getItem("idBlog");
    this.id = localStorage.getItem("id");
    //  this._ActivatedRoute.snapshot.params.id;
    this._homeService.getSingleBlogs(this.idBlogs).subscribe((result) => {
      this.singleBlog = result.data;
    });
    this._homeService.getHomeBlog().subscribe((result) => {
      this.desSlug = result.data[0].destination_slug;
    });

    this._homeService.getDestinationBlogs(this.id).subscribe((res) => {
      this.alldestinationCards = res.data;

      console.log(this.alldestinationCards);
    });

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
