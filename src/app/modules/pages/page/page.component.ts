import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Pages } from 'src/app/core/interfaces/pages';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  type = true;

  singlePageContent:Pages[]=[];
  relatedPages:Pages[]=[]
  id:any;
  img=[];
  phone:any
  categorySlug: any;
  desSlug: any;
  constructor(private _page : HomeserviceService ,  private _Active:ActivatedRoute)  { }
  ngOnInit(): void {


    this.id = this._Active.snapshot.params.page;
    this._page.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
    this._page.getSinglePage(this.id).subscribe(res => {
      this.singlePageContent = res.data
      this.categorySlug = res.data[0].category_slug
      this.desSlug = res.data[0].destination_slug

      this.relatedPages = res.data[0].related_pages

  })}
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

}
