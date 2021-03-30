import { Component, OnInit } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { destinationBlog } from '../../interfaces/destinationBlog';
import { HomeserviceService } from '../../services/homeservice.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogContainer:destinationBlog[] = []
  constructor(private _blog:HomeserviceService) { }

  ngOnInit(): void {
    this._blog.getDestinationEgy().subscribe(result => this.blogContainer = result.data)
  }

  setId(id:any){
    localStorage.setItem('idBlog' , id)
  }

}
