import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;
  idCru: any;
  gallery: any;
  img: any[] = [];
  idExc: any;
  pageID: any;

  constructor( private _gallery:HomeserviceService , private active:ActivatedRoute) { }
  @Input() cruise = false;
  @Input() page = false;

  @Input() excur = false;
  ngOnInit(): void {
    this.idCru = this.active.snapshot.params.cruis
    this.idExc = this.active.snapshot.params.excursion
    this.pageID = this.active.snapshot.params.page
    this.galleryOptions = [
      {
        width: '825px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    if(this.cruise == true){
      this._gallery.getSingleCruise(this.idCru).subscribe(result => {


        this.img=result.data[0].gallery
        this.gallery = this.img.length

        this.galleryImages=[]
        this.img.forEach(ele => {

          this.galleryImages.push({
            small: ele,
            medium: ele,
            big: ele,
          }


          )
  })

      })
    }

    if(this.excur == true){
      this._gallery.getSingleExcursion(this.idExc).subscribe(result => {


        this.img=result.data[0].gallery
        this.gallery = this.img.length

        this.galleryImages=[]
        this.img.forEach(ele => {

          this.galleryImages.push({
            small: ele,
            medium: ele,
            big: ele,
          }


          )
  })

      })
    }

    if(this.page == true){
      this._gallery.getSinglePage(this.pageID).subscribe(result => {


        this.img=result.data[0].gallery
        this.gallery = this.img.length

        this.galleryImages=[]
        this.img.forEach(ele => {

          this.galleryImages.push({
            small: ele,
            medium: ele,
            big: ele,
          }


          )
  })

      })
    }

  }

}
