import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.css']
})
export class MainContentsComponent implements OnInit {

  guide = false
  package = false
  excursions = false
  cruises = false
  hotels = false
  facts = false
  blogs = false

  slug: any





  constructor(private active: ActivatedRoute, private _home: HomeserviceService) { }

  ngOnInit(): void {

    this.slug = localStorage.getItem('slug')
    console.log(this.slug);

    this._home.getOneDestinationContent().subscribe(res => {
      this.active.params.subscribe(data => {
        if (data.slug == res.data[0].page_content[0].slug) {

          this.guide = true
          console.log(res.data[0].page_content[0].slug);
        }
        if (data.slug == res.data[0].page_content[1].slug) {
          this.package = true
        }
        if (data.slug == res.data[0].page_content[2].slug) {
          this.excursions = true
        }
        if (data.slug == res.data[0].page_content[3].slug) {
          this.cruises = true
        }
        if (data.slug == res.data[0].page_content[4].slug) {
          this.hotels = true
        }
        if (data.slug == res.data[0].page_content[5].slug) {
          this.facts = true
        }
        if (data.slug == res.data[0].page_content[6].slug) {
          this.blogs = true
        }
      })
    })
  }
}

