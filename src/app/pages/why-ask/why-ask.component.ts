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
img=[]
  

  aboutContainer:About[] = [];
  @ViewChild('videoPlayer') videoplayer!: ElementRef;
  hideIcon:boolean = true;
  constructor(private _about:HomeserviceService ,private gallery: Gallery ) { }

  ngOnInit(): void {
    
    this._about.getAboutAs().subscribe(result => {this.aboutContainer = result.data;
    
      this.img=result.data[0].video
  
      
     
}) 
    }
      
      
      

      
  toggleVideo() {
     this.videoplayer.nativeElement.play();
    this.hideIcon = false;
}




}
