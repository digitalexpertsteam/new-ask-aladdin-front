import { Component, OnInit } from '@angular/core';
import { destinationBlog } from 'src/app/interfaces/destinationBlog';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-destination-blog',
  templateUrl: './destination-blog.component.html',
  styleUrls: ['./destination-blog.component.css']
})
export class DestinationBlogComponent implements OnInit {

  destinationBlog:destinationBlog[] = [];
  id:any;
  constructor(private _destinationBlog:HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this._destinationBlog.getDestinationBlogs(this.id).subscribe(result => this.destinationBlog = result.data);
  }

}
