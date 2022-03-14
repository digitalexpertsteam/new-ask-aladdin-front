import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pages } from 'src/app/core/interfaces/pages';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-pages',
  templateUrl: './all-pages.component.html',
  styleUrls: ['./all-pages.component.css']
})
export class AllPagesComponent implements OnInit {
  pagesContent:Pages[]=[];
  id:any;
  constructor(private _Page:HomeserviceService , private _active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.page
    this._Page.getPage(this.id).subscribe(res => {
      this.pagesContent = res.data

    })
  }

}
