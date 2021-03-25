import { Component, OnInit } from '@angular/core';
import { setISODayOfWeek } from 'ngx-bootstrap/chronos/units/day-of-week';
import { destinationBlog } from '../../../interfaces/destinationBlog';
import { HomeserviceService } from '../../../services/homeservice.service';
import {Title , Meta} from '@angular/platform-browser'
import { SeoService } from '../../../services/seo.service';
import { SecondBannerComponent } from '../../../pages/second-banner/second-banner.component';


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
  title!: String;


  constructor(private _blogs:HomeserviceService , private _Meta : Meta , private _Title : Title , 
    seo: SeoService) {

   }

  ngOnInit(): void {
    this._blogs.getDestinationEgy().subscribe(result => {
      this.blogContainer = result.data     
      this.blog_name = result.data[0].destination_name + " Blogs";
      this.blogDes = result.data[0].destination_description;

      this.desName = result.data[0].destination_name;


      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
      ]);
    }) 
    // seo 
    // set id Blog in localstorage
    }
    setId(id:any){
      localStorage.setItem("idBlog", id);
    } 
  }


