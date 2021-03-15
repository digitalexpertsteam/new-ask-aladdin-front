import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { destinationBlog } from 'src/app/interfaces/destinationBlog';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  singleBlog:Blog[] = [];
  idBlogs: any;
  seo: any;
  alldestinationCards:destinationBlog[] = [];


  

  constructor(private _ActivatedRoute: ActivatedRoute , public _homeService : HomeserviceService) { }

  ngOnInit(): void {
       
         // Get Id From Loacal Storage 
         this.idBlogs = localStorage.getItem("idBlog"); 
        //  this._ActivatedRoute.snapshot.params.id;
         console.log(this.idBlogs)
        this._homeService.getSingleBlogs(this.idBlogs).subscribe(result => {
          this.singleBlog = result.data          
        })

        this._homeService.getDestinationEgy().subscribe(res => {
            this.alldestinationCards = res.data;
            this.alldestinationCards.filter(ele => {
              if(ele.blog_id == this.idBlogs){
                  this.alldestinationCards.slice(ele.blog_id)
              }
            })
            
          })
  }
  setId(id:any){
    localStorage.setItem("idBlog", id);
  } 

}
