import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  blogContainer:Blog[] = []
  constructor(private _blogs:HomeserviceService) { }

  ngOnInit(): void {
    this._blogs.getBlogs().subscribe(result => this.blogContainer = result.data)
  }

}
