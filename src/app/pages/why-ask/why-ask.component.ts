import { Component, OnInit, ViewChild ,ElementRef  } from '@angular/core';
import { About } from '../../interfaces/about';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-why-ask',
  templateUrl: './why-ask.component.html',
  styleUrls: ['./why-ask.component.css']
})
export class WhyAskComponent implements OnInit {

  aboutContainer:About[] = [];
  @ViewChild('videoPlayer') videoplayer!: ElementRef;
  hideIcon:boolean = true;
  constructor(private _about:HomeserviceService ) { }

  ngOnInit(): void {
    this._about.getAboutAs().subscribe(result => this.aboutContainer = result.data)
  }
  toggleVideo() {
     this.videoplayer.nativeElement.play();
    this.hideIcon = false;
}




}
