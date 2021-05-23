import { Component, OnInit } from '@angular/core';
import { Pages } from '../../interfaces/pages';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  singlePageContent:Pages[]=[];

  constructor(private _page : HomeserviceService ,) { }

  ngOnInit(): void {
    this._page.getSinglePage(`about-ask`).subscribe(res => {
      this.singlePageContent = res.data})}

}
