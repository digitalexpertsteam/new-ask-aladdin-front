import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { About } from 'src/app/core/interfaces/about';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

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
  constructor(private _about:HomeserviceService) { }

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
