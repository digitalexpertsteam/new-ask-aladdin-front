import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { destinationBlog } from 'src/app/interfaces/destinationBlog';
import { HomeserviceService } from 'src/app/services/homeservice.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogContainer:destinationBlog[] = []
  constructor(private _blog:HomeserviceService) { }

  ngOnInit(): void {
    this._blog.getBlogs().subscribe(result => this.blogContainer = result.data)
  }

}
