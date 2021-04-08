import { Component, OnInit } from '@angular/core';
import { setISODayOfWeek } from 'ngx-bootstrap/chronos/units/day-of-week';
import { destinationBlog } from '../../../../interfaces/destinationBlog';
import { HomeserviceService } from '../../../../services/homeservice.service';
import {Title , Meta} from '@angular/platform-browser'


@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  blogContainer:destinationBlog[] = [];
  blog_name: any;
  blogBanner: string = `../../../assets/imgs/5b14a68e3de5a.jpg`
  blogDes: string = '';
  desName: string = '';
  desSlug: string ='';
  category: string = ''; 
  title!: String;
  id:any;



  constructor(private _blogs:HomeserviceService , private _Meta : Meta , private _Title : Title ) {

   }

  ngOnInit(): void {
    this._blogs.getDestinationEgy().subscribe(result => {
      this.blogContainer = result.data     
      this.blog_name = result.data[0].destination_name + " Blogs";
      this.blogDes = result.data[0].destination_description;
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
      ]);
    }) 

    this.id = localStorage.getItem('id')
    this._blogs.getOneDestinationDetails(this.id).subscribe(res => {
        this.category = res.data[0].categories[5].slug    
        console.log(this.category);
        
    })
    
    }
    setId(id:any){
      localStorage.setItem("idBlog", id );
    } 
  }


