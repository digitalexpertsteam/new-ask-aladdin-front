import { Component, OnInit } from '@angular/core';
import { Pages } from '../../interfaces/pages';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pagesContent:Pages[]=[];
  constructor(private _Page:HomeserviceService) { }

  ngOnInit(): void {
    this._Page.getPage(100).subscribe(res => {
      console.log(res.data[0]);
      this.pagesContent = res.data
      
    })
  }

}
