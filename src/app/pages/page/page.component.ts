import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pages } from '../../interfaces/pages';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pagesContent:Pages[]=[];
  id:any;
  constructor(private _Page:HomeserviceService , private _active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug
    this._Page.getPage(this.id).subscribe(res => {
      console.log(res.data[0]);
      this.pagesContent = res.data
      
    })
  }

}
