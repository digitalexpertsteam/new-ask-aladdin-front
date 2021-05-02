import { Component, OnInit, ViewChild ,ElementRef  } from '@angular/core';
import { About } from '../../interfaces/about';
import { HomeserviceService } from '../../services/homeservice.service';
import {Gallery} from 'angular-gallery';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-why-ask',
  templateUrl: './why-ask.component.html',
  styleUrls: ['./why-ask.component.css']
})
export class WhyAskComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[] | any;
  galleryImages: NgxGalleryImage[] | any;
  img=[];

  aboutContainer:About[] = [];
  @ViewChild('videoPlayer') videoplayer!: ElementRef;
  hideIcon:boolean = true;
  constructor(private _about:HomeserviceService ,private gallery: Gallery ) { }

  ngOnInit(): void {
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
    this._about.getAboutAs().subscribe(result => {this.aboutContainer = result.data;
    
      this.img=result.data[0].video
      console.log(this.img);
      
      this.galleryImages=[]
      this.img.forEach(ele => {
        
        this.galleryImages.push({
          small: ele,
          medium: ele,
          big: ele,
        }
        )
}) 
    }
      
      
      

      )}
  toggleVideo() {
     this.videoplayer.nativeElement.play();
    this.hideIcon = false;
}




}
